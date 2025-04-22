// import Image from "next/image";
// import Link from "next/link";
// import { FC } from "react";

// type CategoryElementProps = {
//   categoryType: string;
//   href: string;
//   src: string;
//   className?: string;
// };

// const CategoryElement: FC<CategoryElementProps> = ({
//   categoryType,
//   href,
//   src,
//   className = "",
// }) => {
//   return (
//     <Link
//       href={href}
//       className={`w-1/5 text-brown-900 flex flex-col items-center gap-y-4 group ${className} `}
//     >
//       <span className="w-full block relative aspect-square ring ring-primary-500 overflow-hidden rounded-full cursor-pointer group-hover:ring-2 group-hover:ring-primary-300 duration-400 ">
//         <span className="block absolute inset-0 bg-black/30 z-10 rounded-full group-hover:opacity-50 duration-300"></span>

//         <Image
//           src={src}
//           alt={`${categoryType} category`}
//           fill
//           className="object-cover w-full h-full rounded-full group-hover:scale-110 transition-all duration-300"
//         />
//       </span>
//       <span className="font-bold block group-hover:text-primary-400 transition-colors duration-200 ">
//         {categoryType}
//       </span>
//     </Link>
//   );
// };

// export default CategoryElement;

import { Card, CardContent, CardFooter } from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";
import { FC } from "react";

type CategoryElementProps = {
  categoryType: string;
  href: string;
  src: string;
  className?: string;
};

const CategoryElement: FC<CategoryElementProps> = ({
  categoryType,
  href,
  src,
  className = "",
}) => {
  return (
    <Link
      href={href}
      className={`w-full flex flex-col items-center gap-y-4 group ${className}`}
    >
      <Card className="w-full rounded-full group ">
        <CardContent className="w-full block relative aspect-square ring ring-primary-500 overflow-hidden rounded-full cursor-pointer group-hover:ring-2 group-hover:ring-primary-300 duration-400 ">
          <div className="absolute inset-0 bg-black/30 z-10 rounded-full group-hover:opacity-50 transition-opacity duration-300" />
          <Image
            src={src}
            alt={`${categoryType} category`}
            fill
            className="object-cover rounded-full group-hover:scale-110 transition-transform duration-300"
          />
        </CardContent>
      </Card>
      <div className="font-bold block group-hover:text-primary-400 transition-colors duration-200">
        {categoryType}
      </div>
    </Link>
  );
};

export default CategoryElement;
