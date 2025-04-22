import Image from "next/image";
import { Card, CardContent } from "./ui/card";
import Link from "next/link";
import { BrandWithRelations } from "@/lib/services";

function BrandCard({ brand }: { brand: BrandWithRelations }) {
  const safeBrand = {
    ...brand,
    name: brand.name || "",
    slug: brand.slug || "",
    brandUrl: brand.brandUrl || "",
  };
  return (
    <Link href={`/brands/${safeBrand.slug}`}>
      <Card className={`h-full transition-all hover:scale-105 duration-300`}>
        <CardContent className="relative flex  items-center justify-center p-4 aspect-square">
          <Image
            src={safeBrand.brandUrl}
            alt={safeBrand.name}
            width={120}
            height={60}
            className="object-contain w-3/4 h-3/4"
          />
        </CardContent>
      </Card>
    </Link>
  );
}

export default BrandCard;
