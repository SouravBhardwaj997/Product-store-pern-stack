import { CirclePlus, RefreshCcw } from "lucide-react";
import { useProductStore } from "../store/useProductStore";
import { useEffect } from "react";

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
      <div className="grid grid-cols-3 gap-4">
        <p>{products.map((el) => JSON.stringify(el.name))}</p>
      </div>
    </div>
  );
};

export default Home;
