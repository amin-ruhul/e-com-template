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
      <div className="container flex items-center justify-between py-4 lg:py-6">
        <div className="flex items-center gap-5">
          <button
            className="text-3xl lg:hidden"
            onClick={() => setIsMobileMenuOpen(true)}
          >
            <HamBurgerIcon />
          </button>
          <div className="relative h-[2.1rem] w-[6.25rem] shrink-0 lg:h-[2.875rem] lg:w-[9.125rem]">
            <Image
              src="/assets/logo.png"
              alt="logo"
              fill
              sizes="640"
              priority
              className="object-contain"
            />
          </div>
        </div>

        <SearchBar />
        <div className="flex items-center gap-5 text-2xl text-gray-400 lg:text-3xl">
          <div className="flex items-center gap-5">
            <div className="cursor-pointer">
              <MoonIcon />
            </div>
            <div className="cursor-pointer">
              <AccountIcon />
            </div>
          </div>
          <div className="hidden h-[1.875rem] border lg:block"></div>
          <div className="hidden items-center gap-4 lg:flex">
            <Indicator itemCount={10}>
              <HeartIcon />
            </Indicator>

            <div className="h-[1.875rem]  border"></div>
            <Indicator itemCount={5}>
              <div className="mt-1 h-[2.25rem] text-2xl">
                <BagIcon />
              </div>
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
