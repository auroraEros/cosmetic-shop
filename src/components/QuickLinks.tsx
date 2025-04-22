import Link from "next/link";
import { FC } from "react";

type QuickLinksProps = {};

const links = [
  { href: "/", label: "Home" },
  { href: "/products", label: "All Products" },
  { href: "/brands", label: "Brands" },
  { href: "/about", label: "About Me" },
  { href: "/contact", label: "Contact" },
];

const QuickLinks: FC<QuickLinksProps> = ({}) => {
  return (
    <div className="text-center sm:text-left">
      <h3 className="font-bold text-lg mb-4">Quick Links</h3>
      <ul className="space-y-2">
        {links.map((item) => (
          <li key={item.href}>
            <Link
              href={item.href}
              className="hover:text-primary-500 transition-colors duration-300 text-sm sm:text-base"
            >
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default QuickLinks;
