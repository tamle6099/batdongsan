import React from "react";
import { Wrapper } from "../../Wrapper/Wrapper/Wrapper";
import { Title } from "../Title/Title";
import { Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import Image from "next/image";
interface Props {
  heading: {
    title: string;
    content?: string;
    introduce?: string;
    buttonContent?: "";
  };
}

export const Food = (props: Props) => {
  return (
    <>
      <div className="food-bg">
        <Wrapper id="foodwine" className="container">
          <div className="sm:text-center max-w-3xl mx-auto md:pb-20 pb-10">
            <div className="sm:text-center max-w-4xl mx-auto">
              <h3 className="md:text-4xl text-xl text-center text-white uppercase font-semibold ">
                {props.heading.title}
              </h3>
              <p className="text-white md:text-base text-sm pt-8 text-justify">
                {props.heading.content}
              </p>
              <p className="text-white md:text-base text-sm text-justify">
                {props.heading.introduce}
              </p>
            </div>
          </div>
          <Swiper
            // slidesPerView={3}
            spaceBetween={20}
            rewind={true}
            pagination={{
              clickable: true,
            }}
            breakpoints={{
              340: {
                slidesPerView: 1,
              },
              1208: {
                slidesPerView: 3,
              },
            }}
            navigation={true}
            modules={[Navigation]}
            className="mySwiper"
          >
            <SwiperSlide>
              <Image height={500} width={500} src="/img/food1.jpg" alt="" />
            </SwiperSlide>
            <SwiperSlide>
              <Image height={500} width={500} src="/img/food2.jpg" alt="" />
            </SwiperSlide>
            <SwiperSlide>
              <Image height={500} width={500} src="/img/food3.jpg" alt="" />
            </SwiperSlide>
            <SwiperSlide>
              <Image height={500} width={500} src="/img/food1.jpg" alt="" />
            </SwiperSlide>
            <SwiperSlide>
              <Image height={500} width={500} src="/img/food2.jpg" alt="" />
            </SwiperSlide>
            <SwiperSlide>
              <Image height={500} width={500} src="/img/food3.jpg" alt="" />
            </SwiperSlide>
          </Swiper>
        </Wrapper>
      </div>
    </>
  );
};
