import Link from "next/link";
import { ShoppingCartIcon } from "lucide-react";
import Logo from "./Logo";

function Navbar() {
  return (
    <header className=" sticky top-0 z-50 bg-white shadow ">
      <nav className=" container mx-auto">
        <div className=" flex justify-between items-center px-8 py-4">
          <Logo />
          <ul className="hidden md:flex gap-x-16 text-gray-700">
            <li className="hover:text-primary-600 transition-all duration-300 font-bold text-lg  ">
              <Link href="/">Home</Link>
            </li>
            <li className="hover:text-primary-600 transition-all duration-300 font-bold text-lg  ">
              <Link href="/products">Products</Link>
            </li>
            <li className="hover:text-primary-600 transition-all duration-300 font-bold text-lg  ">
              <Link href="/checkout">Checkout</Link>
            </li>
          </ul>

          <div className="flex items-center space-x-4">
            <Link href="/checkout" className="relative ">
              <ShoppingCartIcon className="h-6 w-6 text-primary-600 hover:text-primary-500" />
              {/* {cartCount > 0 && (
              <span className="absolute -top-2 -right-2 flex h-5 w-5 items-center justify-center rounded-full bg-red-500 text-xs text-white">
                {cartCount}
              </span>
            )} */}
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
