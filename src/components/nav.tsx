import Link from 'next/link';

import LogoIcon from './icons/logoIcon';
import BagIcon from './icons/bagIcon';
import UserIcon from './icons/userIcon';

export default function Nav() {
  return (
    <nav className="sticky top-0 z-50 bg-white border-b border-b-gray-200">
      <div className="max-w-screen-2xl mx-auto px-4 sm:px-8 h-24 flex justify-between items-center">
        <Link href="/">
          <LogoIcon />
        </Link>
        <ul className="flex gap-2">
          <li>
            <Link
              className="block group p-2 rounded-lg hover:bg-green-100 transition-all duration-300 relative"
              href="/cart"
            >
              <BagIcon />
            </Link>
          </li>
          <li>
            <Link
              className="block group p-2 rounded-lg hover:bg-green-100 transition-all duration-300 relative"
              href="/login"
            >
              <UserIcon />
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
