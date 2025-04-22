// app/api/products/popular/route.ts
import { getXataClient } from "@/xata";

export async function GET() {
  const xata = getXataClient();

  const popularProducts = await xata.db.products
    .select([
      "xata_id",
      "title",
      "description",
      "basePrice",
      "stock",
      "imageUrl",
      "brand",
      "category",
    ])
    .sort("stock", "asc")
    .getPaginated({
      pagination: { size: 8, offset: 0 },
    });

  return Response.json(popularProducts);
}
