import { Wrapper } from "../../Wrapper/Wrapper/Wrapper";
import { Title } from "../Title/Title";
import { Swiper, SwiperSlide } from "swiper/react";
import { Swiper as SwiperClass } from "swiper/types";
import React, { useRef, useState } from "react";
import { FreeMode, Navigation, Thumbs } from "swiper";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/thumbs";
import Image from "next/image";

interface Props {
  heading: {
    title: string;
  };
  contents: {
    context?: String;
    times: string;
  }[];
  imageslider: {
    image: string;
  }[];
}

export const Service = (props: Props) => {
  const [thumbsSwiper, setThumbsSwiper] = useState<SwiperClass | null>(null);

  return (
    <div className="tqda__banner">
      <Wrapper id="service" className="container">
        <div className=" sm:mx-auto ">
          <div className="grid md:grid-cols-2 grid-cols-1 gap-10">
            <div className="tqda__mobile">
              <h3 className="md:text-3xl text-xl font-semibold pb-5 text-[#4D4D56] uppercase ">
                {props.heading.title}
              </h3>
              {props.contents.map((item, index) => (
                <ul className=" " key={index}>
                  <li className="tqda-icon leading-8 md:text-base text-sm">
                    {item.context}
                  </li>
                </ul>
              ))}
            </div>

            <div className="tqda-swiper relative">
              <Swiper
                spaceBetween={10}
                navigation={true}
                thumbs={{
                  swiper:
                    thumbsSwiper && !thumbsSwiper.destroyed
                      ? thumbsSwiper
                      : null,
                }}
                modules={[FreeMode, Navigation, Thumbs]}
                className="mySwiper2"
              >
                {props.imageslider.map((img, index) => (
                  <SwiperSlide key={index}>
                    <Image src={img.image} alt="" width={500} height={500} />
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
                {props.imageslider.map((img, index) => (
                  <SwiperSlide key={index}>
                    <Image src={img.image} alt="" width={500} height={500} />
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
        </div>
      </Wrapper>
    </div>
  );
};
