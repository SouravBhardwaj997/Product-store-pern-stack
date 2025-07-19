import { CirclePlus, RefreshCcw } from "lucide-react";
import { useProductStore } from "../store/useProductStore";
import { useEffect } from "react";
import ProductCard from "../components/ProductCard";
import Modal from "../components/Modal";
import { Toaster } from "react-hot-toast";

const Home = () => {
  const { products, fetchProducts, loading } = useProductStore();
  useEffect(() => {
    fetchProducts();
  }, []);
  return (
    <div className="max-w-5xl mx-auto pt-6">
      <Toaster />
      <div className="flex justify-between">
        <Modal />
        <button
          className="btn bg-secondary text-primary-content flex items-center py-6"
          onClick={() => {
            (
              document.getElementById(
                "add_product_modal"
              ) as HTMLDialogElement | null
            )?.showModal();
          }}
        >
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
      {loading ? (
        <div className="w-full flex justify-center mt-10">
          <span className="loading loading-spinner loading-xl text-primary "></span>
        </div>
      ) : (
        <div className="grid grid-cols-3 gap-4 mt-10">
          {products.map((el) => (
            <ProductCard
              name={el.name}
              price={el.price}
              key={el.id}
              id={el.id}
              image={el.image}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default Home;
