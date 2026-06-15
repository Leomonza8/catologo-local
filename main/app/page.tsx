import ProductCard from "@/src/components/ProductCard/ProductCard";
import products from "@/src/data/products.json";

export default function Home() {
  return (
    <main className="bg-zinc-50 flex-1 py-8">
      <div className="max-w-5xl mx-auto px-6">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <ProductCard key={product.id} {...product} />
          ))}
        </div>
      </div>
    </main>
  );
}
