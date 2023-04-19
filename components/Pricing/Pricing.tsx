import { Wrapper } from "../../Wrapper/Wrapper/Wrapper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Navigation } from "swiper";
import Image from "next/image";
interface Props {
  heading: {
    title: string;
    content?: string;
    introduce?: string;
    buttonContent?: "";
  };
  contents: {
    rate?: string;
    type: string;
    price: string;
    time?: string;
    endow: [];
    description?: string;
    buttonContent?: string;
    url?: string;
  }[];
}

export const Pricing = (props: Props) => {
  return (
    <div className="tich__bg ">
      <Wrapper id="pricing" className="">
        <div className="container ">
          <div className="flex md:flex-1 tich__flex">
            <h3 className="md:w-1/4 text-center text-3xl pb-5 font-semibold text-[#4D4D56] uppercase">
              {props.heading.title}
            </h3>
            <div className="md:w-3/4 text-[#4D4D56] ">
              <p className="md:text-base text-sm">{props.heading.content}</p>
              <p className="md:text-base text-sm">{props.heading.introduce}</p>
            </div>
          </div>
        </div>
        <div className="tich--swiper md:pt-16 mt-10  flex justify-end">
          <div className="container">
            <Swiper
              slidesPerView={"auto"}
              spaceBetween={30}
              navigation={true}
              pagination={{
                clickable: true,
              }}
              modules={[Navigation]}
              className="mySwiper pb-20"
            >
              <SwiperSlide>
                <div className="flex md:flex-1 tich__swiper_flex bg-[#a29061;]">
                  <div className="md:w-2/6 w-full md:p-10 p-5 order-2">
                    <h4 className="text-[24px] font-normal text-white pb-4 pt-2">
                      Village Center
                    </h4>
                    <p className="text-white md:text-base text-sm">
                      Nếu Park Hyatt Phú Quốc được lấy cảm hứng từ một ngôi làng
                      truyền thống của Việt Nam thì Village Center đóng vai trò
                      là khu vực đình làng với đầy đủ các loại tiện ích, nơi các
                      cư dân tụ họp và tận hưởng không khí đầm ấm.
                    </p>
                    <p className="text-white md:text-base text-sm">
                      Cụm khu Village Center được thiết kế theo cấu trúc nhà
                      gian chữ Đinh, mái đầu đao với ballroom (sức chứa 150
                      người, pool bar, 2 bể bơi (1 bể bơi vô cực hướng biển, 1
                      bể bơi nhỏ hơn bao quanh bởi cây xanh), khu vực ăn uống
                      (nằm rải rác tạo cảm giác như một khu chợ làng) với đa
                      dạng các dịch vụ ẩm thực mang phong vị Á, Âu,..
                    </p>
                  </div>
                  <div className="md:w-4/6 w-full order-1">
                    <Image width={500} height={500} src="/img/ti1.jpg" alt="" />
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="flex md:flex-1 tich__swiper_flex bg-[#a29061;]">
                  <div className="md:w-2/6 w-full md:p-10 p-5 order-2">
                    <h4 className="text-[24px] font-normal text-white pb-4 pt-2">
                      Village Center
                    </h4>
                    <p className="text-white md:text-base text-sm">
                      Nếu Park Hyatt Phú Quốc được lấy cảm hứng từ một ngôi làng
                      truyền thống của Việt Nam thì Village Center đóng vai trò
                      là khu vực đình làng với đầy đủ các loại tiện ích, nơi các
                      cư dân tụ họp và tận hưởng không khí đầm ấm.
                    </p>
                    <p className="text-white md:text-base text-sm">
                      Cụm khu Village Center được thiết kế theo cấu trúc nhà
                      gian chữ Đinh, mái đầu đao với ballroom (sức chứa 150
                      người, pool bar, 2 bể bơi (1 bể bơi vô cực hướng biển, 1
                      bể bơi nhỏ hơn bao quanh bởi cây xanh), khu vực ăn uống
                      (nằm rải rác tạo cảm giác như một khu chợ làng) với đa
                      dạng các dịch vụ ẩm thực mang phong vị Á, Âu,..
                    </p>
                  </div>
                  <div className="md:w-4/6 w-full order-1">
                    <Image width={500} height={500} src="/img/ti1.jpg" alt="" />
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="flex md:flex-1 tich__swiper_flex bg-[#a29061;]">
                  <div className="md:w-2/6 w-full md:p-10 p-5 order-2">
                    <h4 className="text-[24px] font-normal text-white pb-4 pt-2">
                      Village Center
                    </h4>
                    <p className="text-white md:text-base text-sm">
                      Nếu Park Hyatt Phú Quốc được lấy cảm hứng từ một ngôi làng
                      truyền thống của Việt Nam thì Village Center đóng vai trò
                      là khu vực đình làng với đầy đủ các loại tiện ích, nơi các
                      cư dân tụ họp và tận hưởng không khí đầm ấm.
                    </p>
                    <p className="text-white md:text-base text-sm">
                      Cụm khu Village Center được thiết kế theo cấu trúc nhà
                      gian chữ Đinh, mái đầu đao với ballroom (sức chứa 150
                      người, pool bar, 2 bể bơi (1 bể bơi vô cực hướng biển, 1
                      bể bơi nhỏ hơn bao quanh bởi cây xanh), khu vực ăn uống
                      (nằm rải rác tạo cảm giác như một khu chợ làng) với đa
                      dạng các dịch vụ ẩm thực mang phong vị Á, Âu,..
                    </p>
                  </div>
                  <div className="md:w-4/6 w-full order-1">
                    <Image width={500} height={500} src="/img/ti1.jpg" alt="" />
                  </div>
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </Wrapper>
    </div>
  );
};
