"use client";

import { Film, Home, ShoppingBag, User } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

function BottomNavbar() {
  const navItems = {
    home: {
      icon: <Home />,
      text: "Home",
      link: "/home",
    },

    products: {
      icon: <ShoppingBag />,
      text: "Products",
      link: "/products",
    },
    shorts: {
      icon: <Film />,
      text: "Shorts",
      link: "/shorts",
    },
    profile: {
      icon: <User />,
      text: "Profile",
      link: "/profile",
    },
  };

  const activeRoutes = ["/home", "/products", "/shorts", "/profile"];

  const path = usePathname();

  if (!activeRoutes.includes(path)) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 p-4 bg-white border-t shadow-[0_-4px_16px_-4px_rgba(0,0,0,0.15)]">
      {/* <div className="fixed bottom-0 left-0 w-full bg-white z-50 shadow-[0_-4px_16px_-4px_rgba(0,0,0,0.15)]"> */}
      <nav className="flex justify-around">
        {Object.entries(navItems).map(([key, { icon, text, link }]) => (
          <Link key={key} href={link} className="flex flex-col items-center">
            {icon}
            <span className="text-xs">{text}</span>
          </Link>
        ))}
      </nav>
    </div>
  );
}

export default BottomNavbar;
