import React from "react";
import { Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import Image from "next/image";
interface Props {
  residences: {
    id: number;
    image: string;
    context1: string;
    context2: string;
  }[];
}

export const Residences = (props: Props) => {
  return (
    <div className="residences" id="residences">
      <div className="container mx-auto md:py-32 py-10">
        <h3 className="max-w-lg mx-auto md:pb-20 pb-10 md:text-2xl text-xl text-center font-bold uppercase">
          Những thông tin mới nhất về Dự̣ án Park Hyatt Phu Quoc Residences
        </h3>
        <Swiper
          modules={[Navigation, Pagination]}
          spaceBetween={20}
          slidesPerView={3}
          loop={true}
          pagination={{
            clickable: true,
          }}
          breakpoints={{
            374: {
              slidesPerView: 1,
            },
            1208: {
              slidesPerView: 3,
            },
          }}
          className="mySwiper pb-16"
        >
          {props.residences.map((item) => (
            <SwiperSlide key={item.id}>
              <div className="p-4 bg-[#DED7C7]">
                <Image
                  width={400}
                  height={400}
                  src={item.image}
                  alt="slide 2"
                />
                <div className="py-2">
                  <p className="pt-5">{item.context1}</p>
                  <p className="pt-5">{item.context2}</p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};
