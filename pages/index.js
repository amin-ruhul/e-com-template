import Carousel from "@/components/data-display/carousel";
import CategoryLoading from "@/components/feedback/category-loading";
import SideMenu from "@/components/navigation/side-menu";
import { useFetchCategories } from "@/repo/client/categories";
import Image from "next/image";
import { fetchBanner } from "@/repo/server/banner";
import Link from "next/link";
import { IMAGE_BASE_URL } from "@/utils/constant";

export default function Home({ mainBannerList = [], footerBannerList = [] }) {
  const FOOTER_BANNER_MAX_LENGTH = 2;
  const { isLoading, data: categoryList } = useFetchCategories();

  return (
    <div className="flex justify-center px-3 lg:px-0">
      <div className="container grid grid-cols-1 gap-3 lg:grid-cols-4">
        <div className="hidden rounded-b-md bg-white lg:block">
          {isLoading && <CategoryLoading />}
          {categoryList && <SideMenu categoryList={categoryList} />}
        </div>
        <div className="space-y-2 pt-3 lg:col-span-2 lg:space-y-4">
          <Carousel bannerList={mainBannerList} />

          <div className="columns-2">
            {footerBannerList
              .slice(0, FOOTER_BANNER_MAX_LENGTH)
              .map((banner) => (
                <Link href={banner.url} key={banner.id}>
                  <Image
                    src={`${IMAGE_BASE_URL}/${banner.photo}`}
                    alt="banner"
                    height={290}
                    width={604}
                    className="rounded"
                  />
                </Link>
              ))}
          </div>
        </div>
        <div className="hidden pt-3 align-top lg:block">
          <Image
            src="/assets/images/static-banner-img.png"
            width={363}
            height={800}
            alt="banner"
            sizes="33vw"
            priority
            className="rounded"
          />
        </div>
      </div>
    </div>
  );
}

export async function getStaticProps() {
  const mainBannerList = await fetchBanner("main_banner");
  const footerBannerList = await fetchBanner("footer_banner");

  return {
    props: {
      mainBannerList,
      footerBannerList,
    },
  };
}
