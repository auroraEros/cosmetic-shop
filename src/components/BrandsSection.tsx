import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import BrandCard from "./BrandCard";
import { BrandWithRelations, getAllBrands } from "@/lib/services";
import { CAROUSEL_THRESHOLD } from "@/utils/constants";


export async function BrandsSection() {
  const brands: BrandWithRelations[] = await getAllBrands();
  const shouldShowCarousel = brands.length > CAROUSEL_THRESHOLD;

  return (
    <section className="md:px-8 py-12 md:mb-20 px-4">
      <h2 className="text-2xl text-brown-900 font-bold text-center mb-8">Shop by Brand</h2>

      <div className="md:hidden grid grid-cols-2 gap-4">
        {brands.map((brand) => (
          <BrandCard key={brand.xata_id} brand={brand} />
        ))}
      </div>

      {/* Desktop View */}
      <div className="hidden md:block">
        {shouldShowCarousel ? (
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent>
              {brands.map((brand) => (
                <CarouselItem
                  key={brand.xata_id}
                  className="basis-1/3 lg:basis-1/5"
                >
                  <BrandCard brand={brand} />
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="left-2" />
            <CarouselNext className="right-2" />
          </Carousel>
        ) : (
          <div className="grid grid-cols-3 lg:grid-cols-5 gap-4">
            {brands.map((brand) => (
              <div key={brand.xata_id}>
                <BrandCard brand={brand} />
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}