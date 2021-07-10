import { useDarkMode } from "../useDarkMode";
import { BaseButton } from "./BaseButton";

export const ToggleTheme = () => {
  const [colorTheme, setTheme] = useDarkMode();
  const isDark = colorTheme === "dark";
  const isLight = colorTheme === "light";
  const onTheme = () => setTheme(colorTheme);
  return (
    <BaseButton onClick={onTheme}>
      {isLight && <span>Light</span>}
      {isDark && <span>Dark</span>}
    </BaseButton>
  );
};
