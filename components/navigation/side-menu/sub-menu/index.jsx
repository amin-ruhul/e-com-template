import React from "react";
import ChevronRight from "@/components/data-display/icons/chevron-right";

function SubMenu() {
  return (
    <ul className="rounded-md">
      <li className="w-[300px] cursor-pointer rounded-md border px-3">
        <div className="flex items-center justify-between border-b border-secondary py-5">
          <p>Camera Accessories</p>
          <ChevronRight />
        </div>
      </li>
    </ul>
  );
}

export default SubMenu;
