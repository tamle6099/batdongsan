import React from "react";
import { Wrapper } from "../../Wrapper/Wrapper/Wrapper";
import { EffectCoverflow, Pagination, Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
interface Props {
  heading: {
    title: string;
    content?: string;
    introduce?: string;
    bannercontext: string;
    bannerlogo: string;
    bannerconpany: string;
    bannerbim: string;
    buttonContent?: "";
  };
}

export const Information = (props: Props) => {
  return (
    <>
      <div className="intro-banner">
        <div className="container mx-auto relative flex md:justify-between items-center intro-mobile py-5 ">
          <h3 className="md:text-3xl text-xl text-white xm:font-normal">
            {props.heading.bannercontext}
          </h3>
          <img src={props.heading.bannerlogo} alt="" className="w-36" />
          <div className="flex gap-10 item-center justify-center ">
            <h5 className="hero-f-16">{props.heading.bannerconpany}</h5>
            <img src={props.heading.bannerbim} alt="w-[75px]" />
          </div>
        </div>
      </div>
      <div className="intro-header">
        <Wrapper id="information">
          <div className="sm:text-center max-w-4xl mx-auto md:pb-20 pb-5">
            <h3 className="md:text-4xl text-xl text-[#4D4D56] uppercase font-semibold ">
              {props.heading.title}
            </h3>
            <p className="text-[#4D4D56] md:text-base text-sm pt-8">
              {props.heading.content}
            </p>
            <p className="text-[#4D4D56] md:text-base text-sm">
              {props.heading.introduce}
            </p>
          </div>
          <div className="intro-swiper container">
            <Swiper
              centeredSlides={true}
              modules={[Navigation, Pagination, EffectCoverflow]}
              navigation={true}
              effect={"coverflow"}
              spaceBetween={0}
              slidesPerView={"auto"}
              loop={true}
              coverflowEffect={{
                rotate: 50,
                stretch: 0,
                depth: 210,
                modifier: 1,
                slideShadows: true,
              }}
              pagination={{
                clickable: true,
              }}
              className="intro_swiper md:pb-24 pb-16"
            >
              <SwiperSlide>
                <img src="/img/gt1.jpg" alt="slide 2" />
              </SwiperSlide>
              <SwiperSlide>
                <img src="/img/gt2.jpg" alt="slide 3" />
              </SwiperSlide>
              <SwiperSlide>
                <img src="/img/gt3.jpg" alt="slide 2" />
              </SwiperSlide>
              <SwiperSlide>
                <img src="/img/gt1.jpg" alt="slide 2" />
              </SwiperSlide>
              <SwiperSlide>
                <img src="/img/gt2.jpg" alt="slide 3" />
              </SwiperSlide>
              <SwiperSlide>
                <img src="/img/gt3.jpg" alt="slide 2" />
              </SwiperSlide>
            </Swiper>
          </div>
        </Wrapper>
      </div>
    </>
  );
};
