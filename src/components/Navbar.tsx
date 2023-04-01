import NavbarItem from "@/components/NavbarItem";
import { NavbarItemsParams, NavbarItemsTitle } from "@/types";

function Navbar() {
  return (
    <div className="flex justify-center dark:bg-gray-600 bg-amber-100 lg:text-lg p-4">
      <NavbarItem
        title={NavbarItemsTitle.Trending}
        param={NavbarItemsParams.Trending}
      />
      <NavbarItem
        title={NavbarItemsTitle.TopRated}
        param={NavbarItemsParams.TopRated}
      />
    </div>
  );
}

export default Navbar;
