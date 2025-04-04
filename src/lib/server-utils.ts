// tutaj będą się znajdować wszystkie funkcje, które będą wykonywane po stronie serwera. Żeby mieć pewność że będą wywoływane po stronie serwera, należy zainstalować pakiet o nazwie server-only. npm i server-only.

import 'server-only';
import prisma from './prisma';
import { type TProduct } from './types';
import { NextRequest } from 'next/server';

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

// Funkcja checkAutorization sprawdza, czy użytkownik jest autoryzowany do korzystania z aplikacji. W tym przypadku sprawdzamy, czy w nagłówku Authorization znajduje się poprawna para login:hasło.
export function checkAuthorization(req: NextRequest) {
  const authHeader = req.headers.get('Authorization');
  if (!authHeader) return false;

  // W zmiennych username i password przechwywane są wartości z nagłówka Authorization. Nagłówek ten zawiera dane w formacie Basic Auth, czyli w postaci base64. Dlatego musimy je zdekodować.
  // authHeader.split(' ')[1] - dzielimy nagłówek na dwie części. Buffer.from(authHeader.split(' ')[1], 'base64') - tworzymy bufor z zakodowanych danych. toString() - zamieniamy bufor na stringa. split(':') - dzielimy stringa na dwie części. Pierwsza część to login, druga to hasło.
  const [username, password] = Buffer.from(authHeader.split(' ')[1], 'base64')
    .toString()
    .split(':');

  return (
    username === process.env.ADMIN_USERNAME &&
    password === process.env.ADMIN_PASSWORD
  );
}
