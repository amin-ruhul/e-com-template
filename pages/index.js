import SideMenu from "@/components/navigation/side-menu";
import { useFetchCategories } from "@/repo/categories";

export default function Home() {
  const { data: categoryList } = useFetchCategories();

  return (
    <div className="flex min-h-[50vh] justify-center bg-secondary">
      <div className="container grid bg-white lg:grid-cols-4">
        <div className="hidden lg:block">
          <SideMenu categoryList={categoryList} />
        </div>
        <div className="col-span-2">Slider</div>
        <div className="hidden bg-blue-200 lg:block">Promo banner</div>
      </div>
    </div>
  );
}
