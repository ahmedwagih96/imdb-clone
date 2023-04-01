"use client";
import { MdLightMode } from "react-icons/md";
import { BsFillMoonFill } from "react-icons/bs";
import useThemeMode from "@/Hooks/useThemeMode";
import { Themes } from "@/types";

function DarkModeSwitch() {
  const [mounted, currentTheme, setTheme] = useThemeMode();
  return (
    <>
      {mounted &&
        (currentTheme === "dark" ? (
          <MdLightMode
            onClick={() => setTheme(Themes.Light)}
            className="text-xl cursor-pointer hover:text-amber-500"
          />
        ) : (
          <BsFillMoonFill
            onClick={() => setTheme(Themes.Dark)}
            className="text-xl cursor-pointer hover:text-amber-500"
          />
        ))}
    </>
  );
}

export default DarkModeSwitch;
