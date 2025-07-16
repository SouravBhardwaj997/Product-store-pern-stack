import { PaletteIcon } from "lucide-react";

const ThemeSelector = () => {
  return (
    <div className="dropdown dropdown-end">
      <div tabIndex={0} role="button" className="m-1">
        <PaletteIcon />
      </div>
      <ul
        tabIndex={0}
        className="dropdown-content menu bg-base-200 rounded-xl z-1 w-52 p-2 shadow-2xl border border-secondary"
      >
        <button></button>
      </ul>
    </div>
  );
};

export default ThemeSelector;
