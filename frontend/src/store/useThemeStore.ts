import { create } from "zustand";

interface themeStoreType {
  theme: string;
  changeTheme: () => void;
}

export const useThemeStore = create<themeStoreType>((set) => ({
  theme: "forest",
  changeTheme: (theme: string) => {
    set({ theme });
  },
}));
