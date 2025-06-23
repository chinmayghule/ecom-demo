"use client";

import { Film, ShoppingBag, User } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

function BottomNavbar() {
  const navItems = {
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

  const activeRoutes = ["/products", "/shorts", "/profile"];

  const path = usePathname();

  if (!activeRoutes.includes(path)) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 p-4 bg-white border-t">
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
