import axios from "axios";
import { create } from "zustand";

const BASE_URL = "http://localhost:8000/api";
type productStoreType = {
  products: {
    name: string;
    price: number;
    image: string;
    id: number;
    createat: string;
  }[];
  loading: boolean;
  error: boolean;
  fetchProducts: () => void;
  deleteProduct: (id: number) => void;
};
export const useProductStore = create<productStoreType>((set, get) => ({
  products: [],
  loading: true,
  error: false,
  fetchProducts: async () => {
    try {
      set({ loading: true });
      const res = await axios(`${BASE_URL}/products`);
      set({ products: res.data.products });
    } catch (error) {
      set({ error: true });
      console.log("error while fetching producst", error);
    } finally {
      set({ loading: false });
    }
  },
  deleteProduct: async (id: number) => {
    try {
      set({ loading: true });
      await axios(`${BASE_URL}/products/${id}`, {
        method: "DELETE",
      });
      get().fetchProducts();
    } catch (error) {
      set({ error: true });
      console.log("error while deleting product", error);
    } finally {
      set({ loading: false });
    }
  },
}));
