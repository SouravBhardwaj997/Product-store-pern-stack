import { useEffect } from "react";
import { useParams, type Params } from "react-router-dom";
import { useProductStore } from "../store/useProductStore";

const Product = () => {
  const { fetchProduct, currentProduct } = useProductStore();
  const { id } = useParams<{ id: string }>();
  useEffect(() => {
    if (id) {
      fetchProduct(id);
    }
  }, []);
  return <div className="w-full h-dvh bg-base-300"></div>;
};

export default Product;
