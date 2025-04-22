// components/ProductCard.tsx
import { ProductsRecord } from "@/xata";

import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import Image from "next/image";
import { Button } from "@/components/ui/button";

export function ProductCard({ product }: { product: ProductsRecord }) {
  return (
    <Card className="group relative bg-white rounded-lg overflow-hidden shadow hover:shadow-lg transition-all duration-300 border border-gray-100 h-full p-2">
      <CardHeader className="p-0 relative">
        <div
          className={`absolute top-3 left-3 text-xs px-2 py-1 rounded-full z-10 ${
            (product.stock || 0) > 0
              ? "bg-emerald-200 text-emerald-800"
              : "bg-primary-100 text-primary-800"
          }`}
        >
          {(product.stock || 0) > 0 ? "In Stock" : "Out of Stock"}
        </div>

        {/* Product Image */}
        <div className="aspect-square relative border-b border-primary-50">
          <Image
            src={product.imageUrl || "/images/placeholder.jpg"}
            alt={product.title || "Product"}
            fill
            className="object-cover group-hover:opacity-90 transition-opacity"
            sizes="(max-width: 640px) 50vw, (max-width: 768px) 33vw, 25vw"
          />
        </div>
      </CardHeader>

      <CardContent className="flex-grow px-4 py-6">
        <h3 className="text-sm font-medium text-gray-900 line-clamp-2">
          {product.title}
        </h3>
        <p className="text-muted-foreground text-sm mt-1 line-clamp-2">
          {product.description}
        </p>
      </CardContent>
      <CardFooter className="mt-2 flex justify-between items-center">
        <p className="text-lg font-bold text-primary-500">
          {product.basePrice}$
        </p>

        <Button
          className="bg-primary-500 cursor-pointer text-white px-3 py-1 rounded-md text-sm hover:bg-primary-600 transition-colors"
          size="sm"
          disabled={product.stock && product.stock <= 0 ? true : false}
          onClick={(e) => e.preventDefault()}
        >
          Add to cart
        </Button>
      </CardFooter>
    </Card>
  );
}
