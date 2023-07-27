import React from "react";

function MenuItems({ menuList }) {
  return (
    <ul className="rounded-md border">
      {menuList.map((menu) => (
        <li className="w-[300px] cursor-pointer px-3" key={menu.slug}>
          <div className="flex items-center justify-between border-b border-secondary py-5">
            <p>{menu.name}</p>
            {!!menu.childes?.length && <ChevronRight />}
          </div>
        </li>
      ))}
    </ul>
  );
}

export default MenuItems;
