import { useState } from "react";
import Image from "next/image";
import { AnimatePresence } from "framer-motion";
import MoonIcon from "@/components/data-display/icons/moon";
import AccountIcon from "@/components/data-display/icons/account";
import HeartIcon from "@/components/data-display/icons/heart";
import BagIcon from "@/components/data-display/icons/bag";
import Indicator from "@/components/data-display/indicator";
import SearchBar from "@/components/data-input/search-bar";
import HamBurgerIcon from "@/components/data-display/icons/hamburger";
import MobileNav from "@/components/navigation/mobile-nav";

function NavBar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <>
      <div className="container flex items-center justify-between py-6">
        <div className="flex items-center gap-5">
          <button
            className="text-3xl lg:hidden"
            onClick={() => setIsMobileMenuOpen(true)}
          >
            <HamBurgerIcon />
          </button>
          <Image src="/assets/logo.png" alt="logo" width={146} height={45} />
        </div>

        <SearchBar />
        <div className="flex items-center gap-5 text-3xl">
          <div className="flex items-center gap-5">
            <MoonIcon />
            <AccountIcon />
          </div>
          <div className="hidden h-[30px] border lg:block"></div>
          <div className="hidden items-center gap-4 lg:flex">
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
      <AnimatePresence>
        {isMobileMenuOpen && (
          <MobileNav onClick={() => setIsMobileMenuOpen(false)} />
        )}
      </AnimatePresence>
    </>
  );
}

export default NavBar;
