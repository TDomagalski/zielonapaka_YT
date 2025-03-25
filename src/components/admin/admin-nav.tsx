'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';

// Icons
import PlusIcon from '../icons/plusIcon';
import Edit05Icon from '../icons/edit05Icon';

export default function AdminNav() {
  const pathname = usePathname();

  return (
    <>
      <h1 className="text-4xl font-medium tracking-tight text-gray-950 mb-12">
        Zarządzaj <span className="text-green-700">sklepem 🛒</span>
      </h1>
      <ul className="flex gap-6 border-b border-b-gray-200 mb-12">
        <li>
          <Link
            className={cn(
              'flex items-center gap-2 text-base text-gray-700 font-medium pb-4 px-2',
              pathname === '/admin/add-product' &&
                'text-green-700 border-b-2 border-b-green-700'
            )}
            href="/admin/add-product"
          >
            Dodaj produkt
            <PlusIcon />
          </Link>
        </li>
        <li>
          <Link
            className={cn(
              'flex items-center gap-2 text-base text-gray-700 font-medium pb-4 px-2',
              pathname === '/admin/update-product' &&
                'text-green-700 border-b-2 border-b-green-700'
            )}
            href="/admin/update-product"
          >
            Aktualizuj produkty
            <Edit05Icon />
          </Link>
        </li>
      </ul>
    </>
  );
}
