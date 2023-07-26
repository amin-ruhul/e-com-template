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
      <div className="container py-4 flex items-center justify-between">
        <div className="flex items-center gap-5">
          <button
            className="lg:hidden text-3xl"
            onClick={() => setIsMobileMenuOpen(true)}
          >
            <HamBurgerIcon />
          </button>
          <Image src="/assets/logo.png" alt="logo" width={146} height={45} />
        </div>

        <SearchBar />
        <div className="text-3xl flex items-center gap-5">
          <div className="flex items-center gap-5">
            <MoonIcon />
            <AccountIcon />
          </div>
          <div className="hidden lg:block h-[30px] border"></div>
          <div className="hidden lg:flex items-center gap-4">
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
