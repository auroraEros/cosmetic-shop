import { FC } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "./ui/carousel";
import { Card, CardContent, CardHeader, CardFooter } from "./ui/card";
import { getFeaturedTestimonials } from "@/lib/services";
import Image from "next/image";

type TestimonialsProps = {};

const Testimonials: FC<TestimonialsProps> = async ({}) => {
  const testimonials = await getFeaturedTestimonials();

  return (
    <div className="w-full max-w-6xl mx-auto px-4">
      <Carousel
        opts={{
          align: "start",
          loop: true,
        }}
        className="w-full relative"
      >
        <CarouselContent>
          {testimonials.map((testimonial) => (
            <CarouselItem
              key={testimonial.xata_id}
              className="sm:basis-1/2 lg:basis-1/3"
            >
              <Card className="h-full flex flex-col">
                <CardContent className="flex items-center gap-4 p-6 border-b border-primary-50">
                  <div className="w-12 h-12 relative flex-shrink-0 rounded-full overflow-hidden">
                    <Image
                      src={testimonial.avatar_url || "/default-avatar.png"}
                      fill
                      alt={testimonial.name || "user"}
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="font-medium">{testimonial.name}</h4>
                    {testimonial.role && (
                      <p className="text-sm text-muted-foreground">
                        {testimonial.role}
                      </p>
                    )}
                  </div>
                </CardContent>
                <CardFooter className="flex-grow p-6">
                  <p className="text-lg italic mb-4">"{testimonial.comment}"</p>
                </CardFooter>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>

        {/* Carousel Controls */}
        <CarouselPrevious className="flex absolute left-1 top-1/2 -translate-y-1/2" />
        <CarouselNext className="flex absolute right-1 top-1/2 -translate-y-1/2" />
      </Carousel>
    </div>
  );
};

export default Testimonials;
