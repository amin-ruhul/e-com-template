import TopPromotionalBanner from "@/components/data-display/banner/top-promtional";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Home() {
  const [isPromotionalBannerShown, setIsPromotionalBannerShown] =
    useState(true);

  return (
    <div>
      <AnimatePresence>
        {isPromotionalBannerShown && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4, delay: 0.2 }}
          >
            <TopPromotionalBanner
              promotionalText="Get 50% discount in all product from June 2023 to December2023"
              onClick={() => setIsPromotionalBannerShown(false)}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
