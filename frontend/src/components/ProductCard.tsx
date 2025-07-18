import { Edit, Trash } from "lucide-react";

const ProductCard = ({
  name,
  image,
  price,
}: {
  name: string;
  image: string;
  price: number;
}) => {
  return (
    <div className="card bg-base-100 shadow-2xl">
      <figure>
        <img
          src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
          alt="Shoes"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{name}</h2>
        <p className="text-primary text-2xl font-bold">$ {price}</p>
        <div className="card-actions justify-end">
          <button className="badge badge-outline badge-error py-4">
            <Edit className="size-5" />
          </button>
          <button className="badge badge-outline badge-info py-4">
            <Trash className="size-5" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
