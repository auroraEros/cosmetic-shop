// components/PopularProducts.tsx
import { ProductsRecord } from "@/xata";
import { PopularProductsCarousel } from "./PopularProductsCarousel";

async function getPopularProducts() {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/products/popular`
  );
  if (!res.ok) throw new Error("Failed to fetch products");
  if (!res.ok) throw new Error("Failed to fetch products");
  return await res.json();
}

export default async function Home() {
  let popularProducts = [];

  try {
    const data = await getPopularProducts();
    popularProducts = data.records || data;
  } catch (error) {
    console.error(error);
  }

  return (
    <section className="w-full py-12 px-4 md:px-8 md:mb-20">
      <PopularProductsCarousel products={popularProducts} />;
    </section>
  );
}
