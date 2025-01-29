"use client";

import Link from "next/link";
import { usePathname } from 'next/navigation'
import {
  FiMessageCircle,
  FiUsers,
  FiUser,
  FiHome,
  FiLogOut,
  FiSettings,
} from "react-icons/fi";

const DesktopNavigation: React.FC = () => {
  const pathname = usePathname()
  return (
    <nav>
      <ul>
        <li><Link className={`rounded-lg ${pathname === '/' ? 'current' : ''}`} href="/"><FiHome />Home</Link></li>
        <li><Link className={`rounded-lg ${pathname === '/profile' ? 'current' : ''}`} href="/profile"><FiUser />Profile</Link></li>
        <li><Link className="rounded-lg" href="#"><FiUsers />Friends </Link></li>
        <li><Link className="rounded-lg" href="#"><FiMessageCircle />Messenger </Link></li>
        <li><Link className="rounded-lg" href="#"><FiSettings />Settings </Link></li>
        <li><Link className="rounded-lg" href="#"><FiLogOut />Log Out </Link></li>
      </ul>
    </nav>
  );
}

export default DesktopNavigation;