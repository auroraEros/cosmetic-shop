"use client";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { ProductCard } from "./ProductCard";
import { ProductsRecord } from "@/xata";




export function PopularProductsCarousel({ products }: { products: ProductsRecord[] }) {
  return (
    
      <div className="container px-4 md:px-6">
        <h2 className="text-3xl text-brown-700 font-bold tracking-tight text-center mb-8">
          Popular Products
        </h2>

        <Carousel
          opts={{
            align: "start",
            loop: true,
            dragFree: true,
          }}
          className="w-full relative"
        >
          <CarouselContent>
            {products.map((product) => (
              <CarouselItem
                key={product.xata_id}
                className="sm:basis-1/2 md:basis-1/3 lg:basis-1/4 px-2"
              >
                <ProductCard product={product} />
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="absolute -left-2 top-1/2 -translate-y-1/2 md:flex" />
          <CarouselNext className="absolute -right-2 top-1/2 -translate-y-1/2 md:flex" />
        </Carousel>
      </div>
  );
}

