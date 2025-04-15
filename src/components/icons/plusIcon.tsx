import { cn } from '@/lib/utils';
import { usePathname } from 'next/navigation';

export default function PlusIcon() {
  const pathname = usePathname();

  return (
    <svg
      className={cn(
        'size-5 stroke-gray-700',
        pathname === '/admin/add-product' && 'stroke-green-700'
      )}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M12 5V19M5 12H19"
        strokeWidth="2.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
