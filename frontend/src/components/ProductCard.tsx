import { Edit, Trash } from "lucide-react";
import { useProductStore } from "../store/useProductStore";
import { useNavigate } from "react-router-dom";

const ProductCard = ({
  name,
  image,
  price,
  id,
}: {
  name: string;
  image: string;
  price: number;
  id: number;
}) => {
  const { deleteProduct } = useProductStore();
  const navigate = useNavigate();
  return (
    <div className="card bg-base-100 shadow-2xl">
      <figure className="h-44">
        <img src={image} alt="image not found" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{name}</h2>
        <p className="text-primary text-2xl font-bold">$ {price}</p>
        <div className="card-actions justify-end">
          <button
            className="badge badge-outline badge-error py-4 cursor-pointer"
            onClick={() => {
              navigate(`/product/${id}`);
            }}
          >
            <Edit className="size-5" />
          </button>
          <button
            className="badge badge-outline badge-info py-4 cursor-pointer"
            onClick={() => {
              deleteProduct(id);
            }}
          >
            <Trash className="size-5" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
