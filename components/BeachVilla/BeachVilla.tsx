import { Swiper as SwiperClass } from "swiper/types";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Navigation, Thumbs } from "swiper";
import React, { useRef, useState } from "react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/thumbs";
import Image from "next/image";

interface Props {
  beach: {
    title: string;
    context: string;
  };
  tables: {
    tabl: string;
    chen1: string;
  }[];
  className: string;
}

export const BeachVilla = (props: Props) => {
  const [thumbsSwiper, setThumbsSwiper] = useState<SwiperClass | null>(null);
  return (
    <div>
      <div className="">
        <h3 className="pt-10 md:text-2xl text-xl text-[#A29061] uppercase hidden xs:block">
          {props.beach.title}
        </h3>
        <div className="lakevilla flex md:flex-row-reverse md:h-[700px] h-full lake__flex p-5 md:p-0">
          <div className="md:w-[55%] w-full ">
            <Swiper
              spaceBetween={10}
              navigation={true}
              thumbs={{
                swiper:
                  thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null,
              }}
              modules={[FreeMode, Navigation, Thumbs]}
              className="mySwiper2"
            >
              <SwiperSlide>
                <Image width={500} height={500} alt="" src="/img/beck1.png" />
              </SwiperSlide>
              <SwiperSlide>
                <img src="/img/bds1.jpg" />
              </SwiperSlide>
              <SwiperSlide>
                <img src="/img/bds4.jpg" />
              </SwiperSlide>
              <SwiperSlide>
                <img src="/img/beck1.png" />
              </SwiperSlide>
            </Swiper>
            <Swiper
              onSwiper={setThumbsSwiper}
              spaceBetween={10}
              slidesPerView={4}
              freeMode={true}
              watchSlidesProgress={true}
              modules={[FreeMode, Navigation, Thumbs]}
              className="mySwiper"
            >
              <SwiperSlide>
                <img src="/img/beck1.png" />
              </SwiperSlide>
              <SwiperSlide>
                <img src="/img/bds1.jpg" />
              </SwiperSlide>
              <SwiperSlide>
                <img src="/img/bds4.jpg" />
              </SwiperSlide>
              <SwiperSlide>
                <img src="/img/beck1.png" />
              </SwiperSlide>
            </Swiper>
          </div>

          <div className="md:p-10 md:w-[45%] w-full order-3 md:order-2">
            <h3 className="pt-10 md:text-2xl text-xl text-[#A29061] uppercase block xs:hidden">
              {props.beach.title}
            </h3>
            <p className="pt-5 leading-8 md:text-base text-sm text-[#4D4D56] pr-5 text-justify">
              {props.beach.context}
            </p>
            <div className="flex mt-8 bg-white rounded-md lake__ntn border-2 ">
              {props.tables.map((item, index) => (
                <div key={index} className="flex-auto lake-bd">
                  <h4 className="text-[#4D4D56] font-medium md:p-3 p-2 md:text-base text-sm lake__bd__bottom ">
                    {item.tabl}
                  </h4>
                  <p className="text-[#A29061] md:text-base text-sm py-3 md:pl-3 pl-2 ">
                    {item.chen1}
                  </p>
                </div>
              ))}
            </div>
            <p className="pt-5 italic text-[#808080] md:text-base text-sm">
              *Dữ liệu có thể được điều chỉnh và cập nhật theo thời gian bởi nhà
              phát triển.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
