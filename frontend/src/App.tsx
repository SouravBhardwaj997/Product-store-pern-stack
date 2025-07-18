import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Product from "./pages/Product";
import { useThemeStore } from "./store/useThemeStore";

function App() {
  const { theme } = useThemeStore();
  return (
    <div data-theme={theme} className="w-full min-h-dvh">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product" element={<Product />} />
      </Routes>
    </div>
  );
}

export default App;
