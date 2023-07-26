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
      className="hidden lg:flex items-center border border-secondary gap-4 h-[50px] rounded-full pl-3 pr-1 py-1"
    >
      <div className="cursor-pointer relative">
        <div
          className="flex items-center space-x-2"
          onClick={() => setIsSearchCategoryOpen(!isSearchCategoryOpen)}
        >
          <HamBurgerIcon />{" "}
          <span className=" font-light">{selectedCategory}</span>
          <TriangleDownIcon />
        </div>
        <DropDown
          dropDownData={[
            { id: 1, value: "Category-1" },
            { id: 1, value: "Category-1" },
            { id: 1, value: "Category-1" },
            { id: 1, value: "Category-1" },
            { id: 1, value: "Category-1" },
            { id: 1, value: "Category-1" },
          ]}
          isModalOpen={isSearchCategoryOpen}
          handleItemChange={(data) => handleCategoryChange(data)}
        />
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
