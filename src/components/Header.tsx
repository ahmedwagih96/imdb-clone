import { Pages, Routes } from "@/types";
import MenuItem from "@/components/MenuItem";
import DarkModeSwitch from "@/components/DarkModeSwitch";
import { AiFillHome } from "react-icons/ai";
import { BsFillInfoSquareFill } from "react-icons/bs";
import Link from "next/link";
function Header() {
  return (
    <header className="flex justify-between px-2 max-w-6xl sm:mx-auto items-center py-6">
      {/* LEFT SIDE */}
      <div className="flex gap-4 lg:gap-6">
        <MenuItem title={Pages.Home} Icon={AiFillHome} address={Routes.Home} />
        <MenuItem
          title={Pages.About}
          Icon={BsFillInfoSquareFill}
          address={Routes.About}
        />
      </div>
      {/* RIGHT SIDE */}
      <div className="flex items-center gap-5">
        <DarkModeSwitch />
        <Link href={Routes.About}>
          <h2 className="text-2xl">
            <span className="font-bold bg-amber-500 py-1 px-2 rounded-lg">
              IMDb
            </span>
            <span className="text-xl hidden sm:inline ml-1">Clone</span>
          </h2>
        </Link>
      </div>
    </header>
  );
}

export default Header;
