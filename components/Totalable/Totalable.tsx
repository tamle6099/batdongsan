import React from "react";
import { Wrapper } from "../../Wrapper/Wrapper/Wrapper";
import { Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import Image from "next/image";
interface Props {
  heading: {
    title: string;
    context: string;
  };
  lakeslider: {
    image: string;
  }[];
}

export default function Totalable(props: Props) {
  return (
    <div className="totalable ">
      <Wrapper id="lable">
        <div className="container mx-auto text-center">
          <h3 className="pb-10 md:text-3xl text-xl text-white uppercase">
            {props.heading.title}
          </h3>
          <div className="">
            <Swiper
              slidesPerView={2}
              spaceBetween={20}
              rewind={true}
              pagination={{
                clickable: true,
              }}
              breakpoints={{
                374: {
                  slidesPerView: 1,
                },
                1208: {
                  slidesPerView: 2,
                },
              }}
              navigation={true}
              modules={[Navigation]}
              className="mySwiper"
            >
              {props.lakeslider.map((item, index) => (
                <SwiperSlide key={index}>
                  <Image width={500} height={500} src={item.image} alt="" />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
          <p className="pt-10 text-white max-w-4xl mx-auto md:text-base text-sm">
            {props.heading.context}
          </p>
        </div>
      </Wrapper>
    </div>
  );
}
