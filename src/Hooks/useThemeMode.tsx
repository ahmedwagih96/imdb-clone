import { useEffect, useState } from "react";
import { useTheme } from "next-themes";

function useThemeMode() {
  const { systemTheme, theme, setTheme } = useTheme();
  const currentTheme = theme === "system" ? systemTheme : theme;
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);
  return [mounted, currentTheme, setTheme] as const;
}

export default useThemeMode;
