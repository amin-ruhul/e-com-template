import TopPromotionalBanner from "@/components/data-display/banner/top-promtional";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import TopBar from "@/components/layout/top-bar";
import NavBar from "@/components/layout/nav-bar";
import MenuBar from "@/components/layout/menu-bar";

export default function Home() {
  const [isPromotionalBannerShown, setIsPromotionalBannerShown] =
    useState(true);

  return (
    <div>
      <AnimatePresence initial={false}>
        {isPromotionalBannerShown && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.4, delay: 0.2 }}
          >
            <TopPromotionalBanner
              promotionalText="Get 50% discount in all product from June 2023 to December2023"
              onClick={() => setIsPromotionalBannerShown(false)}
            />
          </motion.div>
        )}
      </AnimatePresence>
      <div className=" flex items-center justify-center bg-primary-900 text-white">
        <TopBar />
      </div>
      <div className=" flex items-center justify-center">
        <NavBar />
      </div>
      <div className="hidden items-center justify-center border-b border-t shadow-sm lg:flex">
        <MenuBar />
      </div>
    </div>
  );
}
