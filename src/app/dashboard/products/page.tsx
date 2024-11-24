import { getUserSessionServer } from "@/auth/actions/auth-actions";
import { ProductCard } from "@/products";
import { products } from "@/products/data/products";
import { redirect } from "next/navigation";

export default async function ProductsPage() {
  const user = await getUserSessionServer();

  if (!user) redirect("/api/auth/signin");

  return (
    <div>
      <h1 className="text-3xl">Productos disponibles</h1>
      <hr className="mb-5" />

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
        {products.map((product) => (
          <ProductCard key={product.id} {...product} />
        ))}
      </div>
    </div>
  );
}
