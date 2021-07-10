import { useDarkMode } from "./useDarkMode";

export const ToggleTheme = () => {
  const [colorTheme, setTheme] = useDarkMode();
  const isDark = colorTheme === "dark";
  const isLight = colorTheme === "light";
  return (
    <button
      className="w-auto px-8 py-2 my-2 text-base font-medium text-white transition duration-500 ease-in-out transform bg-blue-600 border-blue-600 rounded-md focus:shadow-outline focus:outline-none focus:ring-2 ring-offset-current ring-offset-2 hover:b-gblue-700 "
      onClick={() => setTheme(colorTheme)}
    >
      {isLight && <span>Light</span>}
      {isDark && <span>Dark</span>}
    </button>
  );
};
