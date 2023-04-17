import React, { useState } from "react";
import FormZalo from "../FormZalo/FormZalo";
import FormCompleted from "../FormZalo/FormSucces";
import { Step } from "../FormZalo/FormStep";

type Props = {};

export const Experience = (props: Props) => {
  const [formStep, setFormStep] = useState(0);

  const nextFormStep = () => setFormStep((currentStep) => currentStep + 1);
  return (
    <>
      <div className="experence ">
        <div className="experence-bg"></div>
        <div className="container mx-auto grid md:grid-cols-3 grid-cols-1 gap-10 py-10 experence-conten">
          <div>
            <FormZalo currentStep={formStep}>
              {formStep >= 0 && (
                <Step formStep={formStep} nextFormStep={nextFormStep} />
              )}
              {formStep > 0 && <FormCompleted />}
            </FormZalo>
          </div>
          <div className="p-2 border-2 border-white">
            <img src="/img/tqda1.jpg" alt="" className="w-full" />
          </div>
          <div>
            <p className="exper__icon">
              Tài trợ 100% chi phí đi lại ( vé máy bay khứ hồi Thương gia hoặc
              du thuyền than quan dự án)
            </p>
            <p className="exper__icon mt-6">
              Trải nghiệm biệt thự thí điểm để cảm nhận thực tế dự án thuộc top
              đầu tại Việt Nam
            </p>
            <p className="exper__icon mt-6">
              Áp dụng chính sách không mua vẫn được hoàn tiền 100%
            </p>
            <p className="exper__icon mt-6">
              Tặng ngay kỳ nghỉ dưỡng 2 ngày một đêm tại Regent Phú Quốc 6* để
              trải nghiệm thực tế dự án Park Hyatt Phu Quoc Residences
            </p>
          </div>
        </div>
      </div>
      <div className="bimland-da ">
        <div className="container mx-auto">
          <div className="flex md:justify-between flex-col md:items-center md:gap-10 md:py-5 py-3">
            <h3 className="md:w-2/6 w-full text-3xl text-white md:border-r-4 md:border-white md:py-6 py-3  font-normal">
              Đơn vị phát triển dự án
            </h3>
            <div className="md:w-4/6 w-full grid grid-cols-4 gap-10 pb-5">
              <img src="/img/bimland.png" alt="" />
              <img src="/img/bimland.png" alt="" />
              <img src="/img/bimland.png" alt="" />
              <img src="/img/bimland.png" alt="" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
