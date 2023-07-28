import SearchIcon from "@/components/data-display/icons/search";
import HamBurgerIcon from "@/components/data-display/icons/hamburger";
import TriangleDownIcon from "@/components/data-display/icons/triangle-down";
import DropDown from "@/components/navigation/drop-down";
import { useState } from "react";

function SearchBar() {
  const [isSearchCategoryOpen, setIsSearchCategoryOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("All Catagories");

  const handleCategoryChange = (data) => {
    setSelectedCategory(data);
    setIsSearchCategoryOpen(false);
  };

  return (
    <form
      action=""
      className="hidden h-[50px] items-center gap-4 rounded-full border border-secondary py-1 pl-3 pr-1 lg:flex"
    >
      <div className="relative cursor-pointer">
        <div
          className="flex items-center space-x-2"
          onClick={() => setIsSearchCategoryOpen(!isSearchCategoryOpen)}
        >
          <HamBurgerIcon />{" "}
          <span className="min-w-[6.25rem] font-light">{selectedCategory}</span>
          <TriangleDownIcon />
        </div>
        <DropDown
          dropDownData={[
            { id: 1, value: "Category-1" },
            { id: 1, value: "Category-2" },
            { id: 1, value: "Category-3" },
            { id: 1, value: "Category-4" },
            { id: 1, value: "Category-5" },
            { id: 1, value: "Category-6" },
          ]}
          isModalOpen={isSearchCategoryOpen}
          handleItemChange={(data) => handleCategoryChange(data)}
        />
      </div>
      <input
        type="text"
        placeholder="Search items or store"
        className="h-full min-w-[25rem] outline-0 placeholder:font-light"
      />

      <button className="flex h-full min-w-[60px] items-center justify-center rounded-r-full bg-primary text-lg text-white">
        <SearchIcon />
      </button>
    </form>
  );
}

export default SearchBar;
