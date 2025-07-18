import { PaletteIcon } from "lucide-react";
import { THEMES } from "../constants";
import { useThemeStore } from "../store/useThemeStore";
const ThemeSelector = () => {
  const { theme: currentTheme, changeTheme } = useThemeStore();
  return (
    <div className="dropdown dropdown-end cursor-pointer">
      <div tabIndex={0} role="button" className="m-1">
        <PaletteIcon />
      </div>
      <ul
        tabIndex={0}
        className="dropdown-content flex flex-col gap-1 overflow-y-scroll flex-nowrap menu bg-base-200 rounded-xl z-1 p-2 shadow-2xl border border-secondary mt-4 h-96"
      >
        {THEMES.map((theme) => (
          <li className={`w-full rounded-md `} key={theme.name}>
            <button
              className={`w-full flex justify-between ${
                currentTheme === theme.name && "bg-secondary/30 text-secondary "
              }`}
              onClick={() => {
                changeTheme(theme.name);
              }}
            >
              <span className="flex gap-2 py-1">
                <PaletteIcon />
                {theme.label}
              </span>
              <div className="flex gap-1 items-center">
                {theme.colors.map((color) => (
                  <div
                    className={`size-2 rounded-full`}
                    style={{ backgroundColor: color }}
                    key={color}
                  ></div>
                ))}
              </div>
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ThemeSelector;
