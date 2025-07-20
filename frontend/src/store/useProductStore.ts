import axios from "axios";
import type { FormEvent } from "react";
import toast from "react-hot-toast";
import { create } from "zustand";

const BASE_URL = "http://localhost:8000/api";
interface Product {
  name: string;
  price: number;
  image: string;
  id: number;
  createat: string;
}
type productStoreType = {
  products: {
    name: string;
    price: number;
    image: string;
    id: number;
    createat: string;
  }[];
  loading: boolean;
  currentProduct: {
    name: string;
    price: number;
    image: string;
    id: number;
    createat: string;
  } | null;
  error: boolean;
  formData: {
    name: string;
    image: string;
    price: number;
  };
  setForm: (formData: { name: string; image: string; price: number }) => void;
  resetForm: () => void;
  fetchProducts: () => void;
  deleteProduct: (id: number) => void;
  addProduct: (e: FormEvent) => void;
  fetchProduct: (id: string) => void;
  updateProduct: (id: string) => void;
};
export const useProductStore = create<productStoreType>((set, get) => ({
  products: [],
  loading: true,
  error: false,
  formData: {
    name: "",
    image: "",
    price: 0,
  },
  currentProduct: null,
  setForm: (formData) => {
    set({ formData });
  },
  resetForm: () => {
    set({
      formData: {
        name: "",
        image: "",
        price: 0,
      },
    });
  },
  fetchProducts: async () => {
    try {
      set({ loading: true });
      const res = await axios.get(`${BASE_URL}/products`);
      set({ products: res.data.products });
    } catch (error) {
      set({ error: true });
      toast.error("Error while fetching the products");
      console.log("error while fetching producst", error);
    } finally {
      set({ loading: false });
    }
  },
  deleteProduct: async (id) => {
    try {
      set({ loading: true });
      await axios(`${BASE_URL}/products/${id}`, {
        method: "DELETE",
      });
      get().fetchProducts();
      toast.success("Product Deleted Successfully");
    } catch (error) {
      set({ error: true });
      console.log("error while deleting product", error);
    } finally {
      set({ loading: false });
    }
  },
  addProduct: async (e: FormEvent) => {
    try {
      e.preventDefault();
      set({ loading: true });
      const { formData, fetchProducts } = get();
      await axios.post(`${BASE_URL}/products`, formData);
      fetchProducts();
      toast.success("Product added successfully");
    } catch (error) {
      console.log("error while fetching data", error);
      toast.error("something went wrong");
    } finally {
      set({ loading: false });
    }
  },
  fetchProduct: async (id) => {
    try {
      set({ loading: true });
      const res = await axios.get<{ product: Product[]; success: boolean }>(
        `${BASE_URL}/products/${id}`
      );
      console.log(res);
      set({ currentProduct: res.data.product[0] });
      set({
        formData: {
          name: res.data.product[0].name,
          image: res.data.product[0].image,
          price: res.data.product[0].price,
        },
      });
    } catch (error) {
      set({ error: true });
      toast.error("Something went wrong");
      console.log("error while fetching single product", error);
    } finally {
      set({ loading: false });
    }
  },
  updateProduct: async (id) => {
    try {
      set({ loading: true });
      const { formData } = get();
      const res = await axios.put<{ updated: Product; success: boolean }>(
        `${BASE_URL}/products/${id}`,
        formData
      );
      set({ currentProduct: res.data.updated });
      set({
        formData: {
          name: res.data.updated.name,
          image: res.data.updated.image,
          price: res.data.updated.price,
        },
      });
      toast.success("Product updated Successfully");
    } catch (error) {
      set({ error: true });
      toast.error("Something went wrong");
      console.log("error while fetching updating product", error);
    } finally {
      set({ loading: false });
    }
  },
}));
