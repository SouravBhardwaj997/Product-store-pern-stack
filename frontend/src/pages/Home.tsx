import { CirclePlus, RefreshCcw } from "lucide-react";
import { useProductStore } from "../store/useProductStore";
import { useEffect } from "react";
import ProductCard from "../components/ProductCard";

const Home = () => {
  const { products, fetchProducts } = useProductStore();
  useEffect(() => {
    fetchProducts();
  }, []);
  return (
    <div className="max-w-5xl mx-auto pt-6">
      <div className="flex justify-between">
        <button className="btn bg-secondary text-primary-content flex items-center py-6">
          <CirclePlus />
          Add Products
        </button>
        <button
          className="cursor-pointer"
          onClick={() => {
            fetchProducts();
          }}
        >
          <RefreshCcw className="size-6" />
        </button>
      </div>
      <div className="grid grid-cols-3 gap-4 mt-10">
        {products.map((el) => (
          <ProductCard
            name={el.name}
            price={el.price}
            key={el.name}
            image={el.image}
          />
        ))}
      </div>
    </div>
  );
};

export default Home;
