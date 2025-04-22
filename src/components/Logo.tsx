// components/Logo.tsx
import { ShoppingBag } from "lucide-react";
import Link from "next/link";

export default function Logo() {
  return (
    <Link
      href="/"
      className="flex items-center space-x-2 text-xl font-bold group transition-all duration-300"
    >
      {/* آیکون با افکت هاور */}
      <ShoppingBag className="w-6 h-6 text-primary-300 transition-all duration-300 group-hover:rotate-6 group-hover:scale-110" />

      {/* متن با تغییر رنگ متضاد */}
      <span className="tracking-wide">
        <span className="text-gray-700 group-hover:text-primary-300 transition-colors duration-300">
          Sahar
        </span>{" "}
        <span className="text-primary-300 group-hover:text-gray-700 transition-colors duration-300">
          Shop
        </span>
      </span>
    </Link>
  );
}
