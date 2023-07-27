import ChevronRight from "@/components/data-display/icons/chevron-right";
import Layout from "@/components/layout";
import SideMenu from "@/components/navigation/side-menu";

export default function Home() {
  return (
    <div className="flex min-h-[50vh] justify-center bg-secondary">
      <div className="container grid bg-white lg:grid-cols-4">
        <div className="hidden lg:block">
          <SideMenu />
        </div>
        <div className="col-span-2">Slider</div>
        <div className="hidden bg-blue-200 lg:block">Promo banner</div>
      </div>
    </div>
  );
}
