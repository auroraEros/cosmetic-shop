import { getXataClient } from "@/xata";

async function Page() {
  const xata = getXataClient();
  const products = await xata.db.products.getAll();
  console.log(products);

  return (
    <div>
      <div className="mb-4">محصولات</div>
    </div>
  );
}

export default Page;
