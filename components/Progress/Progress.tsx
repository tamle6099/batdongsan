import { Swiper, SwiperSlide } from "swiper/react";
import { Swiper as SwiperClass } from "swiper/types";
import React, { useRef, useState } from "react";
import { FreeMode, Navigation, Thumbs } from "swiper";
type Props = {};

export const Progress = (props: Props) => {
  const [thumbsSwiper, setThumbsSwiper] = useState<SwiperClass | null>(null);
  return (
    <div className="progress py-24" id="progress">
      <div className="pb-10 text-center">
        <h3 className="text-3xl uppercase font-medium">
          Tiến độ thi công dự án
        </h3>
        <p className="max-w-4xl mx-auto pt-5 ">
          Tiến độ xây dựng dự án Park Hyatt Phu Quoc Residences được tổng thầu
          thi công FQM Corporation chính thức thi công vào năm 2019. Đến nay dự
          án đã dần lộ diện hình hài, ….
        </p>
      </div>
      <div className="tqda-swiper grid grid-cols-2 container mx-auto gap-10 ">
        <Swiper
          spaceBetween={3}
          navigation={true}
          thumbs={{
            swiper:
              thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null,
          }}
          modules={[FreeMode, Navigation, Thumbs]}
          className="mySwiper2"
        >
          <SwiperSlide>
            <img src="/img/tqdu1.jpg" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="/img/mbtt2.jpg" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="/img/mbtt.jpg" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="/img/nntt1.jpg" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="/img/tqdu1.jpg" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="/img/mbtt2.jpg" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="/img/mbtt.jpg" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="/img/nntt1.jpg" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="/img/tqdu1.jpg" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="/img/mbtt2.jpg" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="/img/mbtt.jpg" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="/img/nntt1.jpg" />
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
            <img src="/img/tq1.jpg" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="/img/mbtt2.jpg" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="/img/mbtt.jpg" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="/img/tq4.jpg" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="/img/tqdu1.jpg" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="/img/mbtt2.jpg" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="/img/mbtt.jpg" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="/img/nntt1.jpg" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="/img/tqdu1.jpg" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="/img/mbtt2.jpg" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="/img/mbtt.jpg" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="/img/nntt1.jpg" />
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};
