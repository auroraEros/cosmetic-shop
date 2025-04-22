import Image from "next/image";
import { FC } from "react";

type HeroSectionProps = {};

const HeroSection: FC<HeroSectionProps> = ({}) => {
  return (
    <section className=" relative flex flex-col md:flex-row md:mb-20 items-center justify-between min-h-[50vh] md:min-h-[70vh] md:py-12  md:px-8 lg:px-12 bg-gradient-to-r from-brown-50 to-brown-500">
      <div className=" md:hidden relative  w-full h-[50vh]">
        <div className="absolute inset-0 bg-black/30 z-10 rounded-xl"></div>
        <Image
          src="/images/pouriya-kafaei-dNmmjX2Owxk-unsplash.jpg"
          alt="Cosmetic products"
          fill
          className="object-cover md:rounded-xl shadow-lg"
        />
      </div>
      {/* Text content and button */}
      <div className="container mx-auto md:w-1/2 space-y-6 text-center md:text-left  md:relative md:top-0 md:-translate-y-0 absolute top-1/2 -translate-y-1/2">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold md:text-brown-500 text-white">
          Experience Beauty
        </h1>
        <p className="text-lg md:text-xl md:text-brown-600 max-w-md mx-auto md:mx-0 text-white">
          A collection of the best cosmetic and beauty products with exceptional
          quality
        </p>
        <button className="md:bg-primary-500 md:hover:bg-primary-400 md:text-white px-6 py-3 rounded-lg font-medium text-brown-900 bg-brown-100 hover:bg-brown-50 bg-opacity-95 md:bg-opacity-100 transition-all duration-300 ">
          Shop Now
        </button>
      </div>

      {/* Image */}
      <div className="hidden md:block md:w-1/2 mt-8 md:mt-0 relative  h-[70vh]">
        <Image
          src="/images/pouriya-kafaei-dNmmjX2Owxk-unsplash.jpg"
          alt="A beautiful woman wearing makeup"
          fill
          className="object-cover rounded-xl shadow-lg"
        />
      </div>
    </section>
  );
};

export default HeroSection;
