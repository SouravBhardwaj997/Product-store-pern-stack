import axios from "axios";
import { create } from "zustand";

const BASE_URL = "http://localhost:8000/api";
type productStoreType = {
  products: { name: string; price: number; image: string }[];
  loading: boolean;
  error: boolean;
  fetchProducts: () => void;
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
}));
