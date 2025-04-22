import { FC } from "react";
import Testimonials from "./Testimonials";

type TestimonialSectionProps = {};

const TestimonialSection: FC<TestimonialSectionProps> = async ({}) => {
  return (
    <section className="md:px-8 md:py-16 px-4 py-12 md:mb-20">
      <h2 className="text-2xl font-bold text-center mb-8">Customers Testimonials</h2>
      <Testimonials />
    </section>
  );
};

export default TestimonialSection;
