import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import TopPromotionalBanner from "../data-display/banner/promotional";
import TopBar from "./top-bar";
import NavBar from "./nav-bar";
import MenuBar from "./menu-bar";

function Layout({ children }) {
  const [isPromotionalBannerShown, setIsPromotionalBannerShown] =
    useState(true);

  return (
    <main>
      <header>
        <div className="flex justify-center px-3 md:px-0">
          <AnimatePresence initial={false}>
            {isPromotionalBannerShown && (
              <TopPromotionalBanner
                promotionalText="Get 50% discount in all product from June 2023 to December2023"
                onClick={() => setIsPromotionalBannerShown(false)}
              />
            )}
          </AnimatePresence>
        </div>
        <div className="flex justify-center bg-primary-900 px-3 text-white md:px-0">
          <TopBar />
        </div>
        <div className="flex items-center justify-center px-3 md:px-0">
          <NavBar />
        </div>
        <div className="hidden items-center justify-center border-b border-t shadow-sm lg:flex">
          <MenuBar />
        </div>
      </header>
      <div className="min-h-[100vh] bg-secondary">{children}</div>
    </main>
  );
}

export default Layout;
