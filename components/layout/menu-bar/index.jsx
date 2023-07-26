import React from "react";
import HamBurgerIcon from "@/components/data-display/icons/hamburger";
import ChevronDown from "@/components/data-display/icons/chevron-down";

function MenuBar() {
  return (
    <div>
      <button>
        <HamBurgerIcon />
        Browse Category
        <ChevronDown />
      </button>
    </div>
  );
}

export default MenuBar;
