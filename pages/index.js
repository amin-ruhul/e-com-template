import Carousel from "@/components/data-display/carousel";
import SideMenu from "@/components/navigation/side-menu";
import { useFetchCategories } from "@/repo/categories";
import Image from "next/image";
import { bannerData } from "@/utils/data/banner";

export default function Home() {
  const { data: categoryList } = useFetchCategories();

  return (
    <div className="flex min-h-[50vh] justify-center">
      <div className="container grid grid-cols-1 gap-2 lg:grid-cols-4">
        <div className="hidden rounded-b-md bg-white lg:block">
          <SideMenu categoryList={categoryList} />
        </div>
        <div className="w-full space-y-5 pt-3 lg:col-span-2">
          <Carousel bannerList={bannerData} />

          <div className="columns-2 space-y-5">
            <Image
              src="https://6valley-aster.6amtech.com/storage/app/public/banner/2023-06-13-64885a2ebe670.png"
              alt="banner"
              height={145 * 2}
              width={302 * 2}
              className="rounded"
            />

            <Image
              src="https://6valley-aster.6amtech.com/storage/app/public/banner/2023-06-13-6488579f916fd.png"
              alt="banner"
              height={145 * 2}
              width={302 * 2}
              className="rounded"
            />
          </div>
        </div>
        <div className="hidden pt-3 align-top lg:block">
          <Image
            src="/assets/images/static-banner-img.png"
            width={184 * 2}
            height={400 * 2}
            alt="banner"
            sizes="33vw"
            className="rounded"
          />
        </div>
      </div>
    </div>
  );
}
