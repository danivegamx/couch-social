"use client";

import Link from "next/link";
import { usePathname } from 'next/navigation'
import {
  FiUser,
  FiHome,
  FiSettings,
  FiBell
} from "react-icons/fi";
import { FaPlus } from "react-icons/fa6";

const MobileNavigation: React.FC = () => {
  const pathname = usePathname()
  return (
    <div className="mobile-nav md:hidden">
      <ul className="rounded-full">
        <li><Link className={`rounded-lg ${pathname === '/' ? 'current' : ''}`} href="/"><FiHome /></Link></li>
        <li><Link className={`rounded-lg ${pathname === '/profile' ? 'current' : ''}`} href="/profile"><FiUser /></Link></li>
        <li><Link className="rounded-lg dark" href="#"><FaPlus /></Link></li>
        <li><Link className="rounded-lg" href="#"><FiBell /></Link></li>
        <li><Link className="rounded-lg" href="#"><FiSettings /></Link></li>
      </ul>
    </div>
  );
}

export default MobileNavigation;