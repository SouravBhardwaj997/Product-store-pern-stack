import { create } from "zustand";

interface themeStoreType {
  theme: string;
  changeTheme: (theme: string) => void;
}

export const useThemeStore = create<themeStoreType>((set) => ({
  theme: localStorage.getItem("theme") ?? "forest",
  changeTheme: (theme: string) => {
    localStorage.setItem("theme", theme);
    set({ theme });
  },
}));
