'use client';

import { TProduct } from '@/lib/types';
import Image from 'next/image';
import MinusIcon from './icons/minusIcon';
import PlusIcon from './icons/plusIcon';
import { useState } from 'react';

export default function ProductInfo({ product }: { product: TProduct }) {
  const [quantity, setQuantity] = useState(1);

  function handlePlusClick() {
    setQuantity((prev) => prev + 1);
  }

  function handleMinusClick() {
    if (quantity === 1) return;
    setQuantity((prev) => prev - 1);
  }

  return (
    <section className="max-w-screen-2xl mx-auto px-4 sm:px-8 my-16 lg:my-32">
      <div className="grid lg:grid-cols-2 gap-16">
        <Image
          className="rounded-lg max-h-96 w-full object-cover"
          src={product.imageURL}
          alt={product.name}
          width={0}
          height={0}
          unoptimized={true} // Wyłącza optymalizację Next.js
        />
        <div className="border border-gray-200 shadow-lg shadow-gray-200/50 rounded-lg p-8">
          <h1 className="text-gray-950 font-medium text-3xl mb-4">
            {product.name}
          </h1>
          <p className="text-lg text-gray-700 mb-8">{product.description}</p>
          <p className="text-lg text-gray-700 mb-4">{product.price} zł/kg</p>
          <div className="flex items-center gap-4 mb-8">
            <button
              className="p-2 rounded-lg border border-gray-400 hover:bg-gray-100 transition-all duration-300"
              type="button"
              onClick={handleMinusClick}
            >
              <MinusIcon />
            </button>
            <span className="text-lg text-gray-700">{quantity} kg</span>
            <button
              className="p-2 rounded-lg border border-gray-400 hover:bg-gray-100 transition-all duration-300"
              type="button"
              onClick={handlePlusClick}
            >
              <PlusIcon />
            </button>
          </div>
          <button
            className="w-full text-center bg-green-700 shadow-lg shadow-green-700/50 text-white font-medium text-lg py-3 rounded-lg hover:bg-green-800 transition-all duration-300"
            type="button"
          >
            Dodaj do koszyka
          </button>
        </div>
      </div>
    </section>
  );
}
