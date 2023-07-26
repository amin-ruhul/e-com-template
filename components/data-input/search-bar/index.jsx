import SearchIcon from "@/components/data-display/icons/search";
import HamBurgerIcon from "@/components/data-display/icons/hamburger";
import TriangleDownIcon from "@/components/data-display/icons/triangle-down";

function SearchBar() {
  return (
    <form
      action=""
      className="flex items-center border border-secondary gap-4 h-[50px] rounded-full pl-3 pr-1 py-1"
    >
      <div className="cursor-pointer">
        <div className="flex items-center space-x-2">
          <HamBurgerIcon /> <span className=" font-light">All Categories</span>
          <TriangleDownIcon />
        </div>
      </div>
      <input
        type="text"
        placeholder="Search items or store"
        className="min-w-[25rem] h-full outline-0 placeholder:font-light"
      />

      <button className="bg-primary text-white min-w-[60px] h-full flex items-center justify-center text-lg rounded-r-full">
        <SearchIcon />
      </button>
    </form>
  );
}

export default SearchBar;
