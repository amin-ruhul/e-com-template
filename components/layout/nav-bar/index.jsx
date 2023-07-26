import React from "react";
import Image from "next/image";
import MoonIcon from "@/components/data-display/icons/moon";
import AccountIcon from "@/components/data-display/icons/account";
import HeartIcon from "@/components/data-display/icons/heart";
import BagIcon from "@/components/data-display/icons/bag";
import Indicator from "@/components/data-display/indicator";
import SearchBar from "@/components/data-input/search-bar";

function NavBar() {
  return (
    <div className="container py-4 flex items-center justify-between">
      <Image src="/assets/logo.png" alt="logo" width={146} height={45} />

      <SearchBar />
      <div className="text-3xl flex items-center gap-5">
        <div className="flex items-center gap-5">
          <MoonIcon />
          <AccountIcon />
        </div>
        <div className="h-[30px]  border"></div>
        <div className="flex items-center gap-4">
          <Indicator itemCount={10}>
            <HeartIcon />
          </Indicator>

          <div className="h-[30px]  border"></div>
          <Indicator itemCount={5}>
            <BagIcon />
          </Indicator>
        </div>
      </div>
    </div>
  );
}

export default NavBar;
