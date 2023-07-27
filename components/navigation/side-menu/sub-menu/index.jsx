import React from "react";
import ChevronRight from "@/components/data-display/icons/chevron-right";

function SubMenu({ subCategoryList }) {
  return (
    <ul className="rounded-md border">
      {subCategoryList.map((subCategory) => (
        <li className="w-[300px] cursor-pointer px-3" key={subCategory.slug}>
          <div className="flex items-center justify-between border-b border-secondary py-5">
            <p>{subCategory.name}</p>
            {!!subCategory.childes?.length && <ChevronRight />}
          </div>
        </li>
      ))}
    </ul>
  );
}

export default SubMenu;
