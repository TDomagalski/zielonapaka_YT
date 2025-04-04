'use client';

import Image from 'next/image';
import Link from 'next/link';
import CartIcon from './icons/cartIcon';
import { TProduct } from '@/lib/types';
import { useRouter, useSearchParams } from 'next/navigation';

export default function ProductsSection({
  products,
}: {
  products: TProduct[];
}) {
  // Ten kod sprawia że gdy zmieniamy sortowanie to pushuje do adresu URL nowy parametr sort. W momencie gdy wybieramy domyślnie to wraca do głównej strony. W momencie gdy wybieramy sortowanie to dodaje do adresu URL ?sort=priceDesc lub ?sort=priceAsc. Dzięki temu możemy zmieniać sortowanie bez przeładowania strony.
  // useRouter to hook który pozwala na manipulację routerem w Next.js. useSearchParams to hook który pozwala na dostęp do parametrów zapytania w adresie URL.
  const router = useRouter();
  const searchParams = useSearchParams();
  const sortBy = searchParams.get('sort') || 'default';
  function handleSelectChange(e: React.ChangeEvent<HTMLSelectElement>) {
    if (e.target.value === 'default') router.push('/', { scroll: false });
    else router.push(`?sort=${e.target.value}`, { scroll: false });
  }

  // Funkcja sortProducts sortuje produkty po cenie.
  function sortProducts(products: TProduct[], sortBy: string) {
    switch (sortBy) {
      case 'priceDesc':
        return [...products].sort((a, b) => b.price - a.price);
      case 'priceAsc':
        return [...products].sort((a, b) => a.price - b.price);
      default:
        return products;
    }
  }

  const sortedProducts = sortProducts(products, sortBy);

  return (
    <section className="max-w-screen-2xl mx-auto px-4 sm:px-8 mb-16 lg:mb-32">
      {/* Jest taka zasada że jak piszemy element section to zawsze pod nim musi się znaleść nagłówek. h1 może być użyty tylko raz na stronie więc trzeba użyć h2 */}
      <h2 className="text-4xl font-medium tracking-tight text-gray-950 mb-8">
        Świeżo, tanio i ekologicznie
      </h2>
      <div className="flex flex-col justify-between lg:flex-row lg:items-center mb-8 gap-4">
        <p className="text-gray-700 text-base">
          Liczba produktów: {sortedProducts.length}
        </p>
        <div>
          <label
            className="text-gray-950 font-medium text-sm mr-4"
            htmlFor="sort"
          >
            Sortuj wg.
          </label>
          <select
            className="text-grey-700 text-base border border-gray-200 p-1 rounded-lg shadow-lg shadow-gray-200/50"
            name="sort"
            id="sort"
            value={sortBy}
            onChange={handleSelectChange}
          >
            <option value="default">Domyślnie</option>
            <option value="priceDesc">Cena: od najwyższej</option>
            <option value="priceAsc">Cena: od najniższej</option>
          </select>
        </div>
      </div>
      <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-6">
        {/* W zmiennej sortedProducts przetrzymujemy posortowane produkty, a funkcja map() generuje je na stronie */}
        {sortedProducts.map((product) => (
          <Link
            className="rounded-lg overflow-hidden border border-gray-200 shadow-lg shadow-gray-200/50 hover:translate-y-1 transition-all duration-300"
            href={`/products/${product.id}`}
            key={product.id}
          >
            <figure>
              <Image
                className="w-full h-60 object-cover"
                src={product.imageURL}
                alt={product.name}
                width={0}
                height={0}
                unoptimized={true} // Wyłącza optymalizację Next.js
              />
              <div className="p-4">
                <div className="flex justify-between items-center">
                  <p className="text-lg font-medium text-gray-950">
                    {product.name}
                  </p>
                  <CartIcon />
                </div>
                <p className="text-lg text-gray-700">{product.price} zł / kg</p>
              </div>
            </figure>
          </Link>
        ))}
      </div>
    </section>
  );
}
