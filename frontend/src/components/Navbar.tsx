import { ShoppingBag, ShoppingCart } from "lucide-react";
import ThemeSelector from "./ThemeSelector";
import { useProductStore } from "../store/useProductStore";

const Navbar = () => {
  const { products } = useProductStore();
  return (
    <div className="bg-base-100/80 backdrop-blur-2xl sticky top-0 z-50 text-base-content border-b border-secondary py-4">
      <div className="max-w-6xl mx-auto flex justify-between">
        <h1
          className="uppercase text-2xl font-bold tracking-widest flex gap-2 items-center 
          mask-r-from-blue-900 mask-r-to-blue-200"
        >
          <ShoppingCart className="size-8 text-primary" />
          <span className="font-mono tracking-wider text-3xl bg-clip-text bg-gradient-to-r from-secondary to-secondary text-transparent">
            Postgrestore
          </span>
        </h1>
        <div className="flex gap-8 items-center">
          <ThemeSelector />
          <div className="indicator">
            <span className="indicator-item badge badge-secondary p-2 text-xs">
              {products.length}
            </span>
            <span>
              <ShoppingBag />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
