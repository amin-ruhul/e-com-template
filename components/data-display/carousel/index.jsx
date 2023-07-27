import { A11y, Autoplay, EffectFade, Pagination } from "swiper";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/pagination";

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
      effect={"fade"}
      loop={true}
      pagination={pagination}
      autoplay={{
        delay: 2000,
      }}
      modules={[Pagination, Autoplay, A11y, EffectFade]}
      className="rounded-[0.5rem] md:rounded-[0.875rem]"
    >
      {bannerList.map((bannerData) => (
        <SwiperSlide key={bannerData.id}>
          <Image
            src={bannerData.banner}
            width={620 * 2}
            height={310 * 2}
            priority
            alt="slider image"
            className="rounded"
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}

export default Carousel;
