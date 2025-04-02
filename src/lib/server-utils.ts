// tutaj będą się znajdować wszystkie funkcje, które będą wykonywane po stronie serwera. Żeby mieć pewność że będą wywoływane po stronie serwera, należy zainstalować pakiet o nazwie server-only. npm i server-only.

import 'server-only';
import prisma from './prisma';
import { type TProduct } from './types';

export async function getProductByName(name: string) {
  return await prisma.product.findFirst({
    where: { name },
  });
}

export async function createProduct({
  name,
  price,
  description,
  imageURL,
}: // Omit<TProduct, 'id'> - zwraca typ TProduct bez pola id, ponieważ id jest generowane automatycznie przez bazę danych.
Omit<TProduct, 'id'>) {
  await prisma.product.create({
    data: {
      name,
      price,
      description,
      imageURL,
    },
  });
}

// Ta funkcja zwraca wszystkie produkty z bazy danych. Można ją wykorzystać w komponentach, które będą wyświetlać listę produktów.
export async function getProducts() {
  return await prisma.product.findMany();
}
