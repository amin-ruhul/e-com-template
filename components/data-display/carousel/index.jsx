import { A11y, Autoplay, Pagination } from "swiper";
import { IMAGE_BASE_URL } from "@/utils/constant";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/pagination";
import Link from "next/link";

function Carousel({ bannerList }) {
  const pagination = {
    clickable: true,
    renderBullet: function (index, className) {
      return `<span class="${className}"></span>`;
    },
  };

  return (
    <Swiper
      slidesPerView={1}
      spaceBetween={10}
      loop={true}
      pagination={pagination}
      autoplay={{
        delay: 3000,
      }}
      modules={[Pagination, Autoplay, A11y]}
      className="rounded"
    >
      {bannerList.map((bannerData) => (
        <SwiperSlide key={bannerData.id}>
          <Link href={bannerData.url}>
            <Image
              src={`${IMAGE_BASE_URL}/${bannerData.photo}`}
              width={1240}
              height={620}
              priority
              alt="slider image"
              className="rounded"
            />
          </Link>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}

export default Carousel;
