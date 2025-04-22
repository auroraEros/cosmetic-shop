import { BrandsSection } from "@/components/BrandsSection";
import CategorySection from "@/components/CategorySection";
import HeroSection from "@/components/HeroSection";
import PopularProductsSection from "@/components/PopularProductsSection";
import TestimonialSection from "@/components/TestimonialSection";


async function Page() {
  return (
    <div className="container mx-auto">
      {/* Hero Section */}
      <HeroSection />

      {/* Category Section */}
      <CategorySection />

      {/* Popular products Section */}
      <PopularProductsSection />

      {/* Brands Section */}
      <BrandsSection />

      {/* Testimonials Section */}
      <TestimonialSection />
    </div>
  );
}

export default Page;
