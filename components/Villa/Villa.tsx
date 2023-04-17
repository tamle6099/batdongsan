import { Swiper as SwiperClass } from "swiper/types";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Navigation, Thumbs } from "swiper";
import React, { useRef, useState } from "react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/thumbs";
import clsx from "clsx";

interface Props {
  title: string;
  context: string;
  tables: {
    tabl: string;
    chen1: string;
    chen2: string;
    chen3: string;
  }[];
  imageslider: {
    image: string;
  }[];
  className?: string;
}

export const Villa = ({
  title,
  context,
  tables,
  className,
  imageslider,
}: Props) => {
  const [thumbsSwiper, setThumbsSwiper] = useState<SwiperClass | null>(null);
  return (
    <>
      <div className="lakebg">
        <div
          className={clsx(
            `lakevilla flex md:h-[700px] h-full lake__flex`,
            className
          )}
        >
          <h3 className="md:py-10 py-5 md:text-2xl text-lg text-[#A29061] uppercase hidden xs:block">
            {title}
          </h3>
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
              {imageslider.map((item, index) => (
                <SwiperSlide key={index}>
                  <img src={item.image} />
                </SwiperSlide>
              ))}
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
              {imageslider.map((item, index) => (
                <SwiperSlide key={index}>
                  <img src={item.image} />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
          <div className="md:p-10 md:w-[45%] w-full ">
            <h3 className="md:py-10 py-5 md:text-2xl text-lg text-[#A29061] uppercase hidden md:block">
              {title}
            </h3>
            <p className="pt-5 leading-8 md:text-base text-sm text-white pr-5 text-justify">
              {context}
            </p>
            <div className="flex mt-8 bg-white rounded-md lake__ntn">
              {tables.map((item, index) => (
                <div key={index} className="flex-auto lake-bd">
                  {item.tabl && (
                    <h4 className="text-[#4D4D56] md:p-3 p-2 md:text-base text-sm lake__bd__bottom ">
                      {item.tabl}
                    </h4>
                  )}
                  {item.chen1 && (
                    <p className="text-[#A29061] md:text-base text-sm py-3 md:pl-3 pl-2 lake__bd__bottom">
                      {item.chen1}
                    </p>
                  )}
                  {item.chen2 && (
                    <p className="text-[#A29061] md:text-base text-sm py-3 md:pl-3 pl-2 lake__bd__bottom ">
                      {item.chen2}
                    </p>
                  )}
                  {item.chen3 && (
                    <p className="text-[#A29061] md:text-base text-sm py-3 md:pl-3 pl-2">
                      {item.chen3}
                    </p>
                  )}
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
    </>
  );
};
