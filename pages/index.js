import CategoryLoading from "@/components/feedback/category-loading";
import SideMenu from "@/components/navigation/side-menu";
import { useFetchCategories } from "@/repo/categories";
import Image from "next/image";

export default function Home() {
  const { isLoading, data: categoryList } = useFetchCategories();

  return (
    <div className="flex  justify-center">
      <div className="container grid lg:grid-cols-4">
        <div className="hidden rounded-b-md bg-white lg:block">
          {isLoading && <CategoryLoading />}
          {categoryList && <SideMenu categoryList={categoryList} />}
        </div>
        <div className="col-span-2">Slider</div>
        <div className="hidden lg:block">
          <div className="relative h-full w-full">
            <Image
              src="/assets/images/static-banner-img.png"
              fill
              alt="banner"
              sizes="33vw"
              className=" object-contain"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
