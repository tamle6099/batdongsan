import React, { useState } from "react";
import { Wrapper } from "../../Wrapper/Wrapper/Wrapper";

// interface Props {
//   image: string;
//   heading: {
//     title: string;
//     content?: string;
//     subContent?: [];
//     buttonContent?: "";
//   };
//   contents: {
//     form: {
//       element?: string;
//       name: string;
//       placeholder: string;
//     }[];
//     buttonContent: string;
//     infoContact: {
//       icon: string;
//       name: string;
//       description: string;
//     }[];
//   };
// }

// export const Contact = (props: Props) => {

//   return (
//     <div className="form">
//       <Wrapper id="contact" className="">
//         <div className="flex items-center justify-center container mx-auto">
//           <div className="flex p-5 ">
//             <form action="#" method="POST" className="bg-slate-900">
//               <div className="w-[600px]">
//                 <div className="">
//                   {props.contents.form.map((item, index) => (
//                     <div
//                       key={index}
//                       className={` ${
//                         item.element === "input" && "sm:col-span-3"
//                       }`}
//                     >
//                       <label
//                         htmlFor={item.name}
//                         className="block text-sm font-medium text-gray-700"
//                       >
//                         {item.name}
//                       </label>
//                       {item.element === "input" ? (
//                         <input
//                           type="text"
//                           name={item.name}
//                           id={item.name}
//                           placeholder={item.placeholder}
//                           className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-sky-500 focus:ring-sky-500 sm:text-sm"
//                         />
//                       ) : (
//                         <div className="mt-1">
//                           <textarea
//                             id={item.name}
//                             name={item.name}
//                             rows={3}
//                             className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-sky-500 focus:ring-sky-500 sm:text-sm"
//                             placeholder={item.placeholder}
//                             defaultValue={""}
//                           />
//                         </div>
//                       )}
//                     </div>
//                   ))}
//                 </div>
//                 <div className="text-right">
//                   <button
//                     type="submit"
//                     className="mt-6 inline-block rounded-lg bg-sky-500 px-4 py-1.5 text-base font-semibold leading-7 text-white shadow-sm ring-1 ring-sky-500 hover:bg-sky-600 hover:ring-sky-600"
//                   >
//                     {props.contents.buttonContent}
//                   </button>
//                 </div>
//               </div>
//             </form>
//             <div className="form-2 w-[500px]">
//               <p className="py-3">
//                 Mọi thông tin quý khách cung cấp sẽ được bảo mật, chỉ phục vụ
//                 mục đích tư vấn, giới thiệu sản phẩm
//               </p>
//               <p className="py-3">
//                 Cung cấp thông tin nhanh chống và cập nhật bảng giá mới nhất từ
//                 chủ đầu tư
//               </p>
//               <p className="py-3">
//                 Hỗ trọ khách hàng tìm căn phù hợp với ngân sách. Không thu thêm
//                 bất cứ khoản phí nào
//               </p>
//               <p className="py-3">
//                 Hỗ trợ thủ tục trực tiếp với chủ đầu tư, trước và sau khi bán
//                 hàng
//               </p>
//             </div>
//           </div>
//         </div>
//       </Wrapper>
//     </div>
//   );
// };
import FormCard from "../Form/Form";

import { Step } from "../Form/FormStep";
import FormCompleted from "../Form/FormSucces";

export const Contact = () => {
  const [formStep, setFormStep] = useState(0);

  const nextFormStep = () => setFormStep((currentStep) => currentStep + 1);

  return (
    <div className="dktt__bg py-5 md:py-24 md:pr-24">
      <div className="container mx-auto flex justify-center items-center dktt__flex">
        <div className="md:w-[600px] md:h-[490px] w-full h-full bg-[#0D314E] md:p-10 p-5">
          <h1 className="text-[32px] text-white font-semibold uppercase">
            Đăng ký nhận thông tin
          </h1>
          <FormCard currentStep={formStep}>
            {formStep >= 0 && (
              <Step formStep={formStep} nextFormStep={nextFormStep} />
            )}
            {formStep > 0 && <FormCompleted />}
          </FormCard>
        </div>
        <div className="dktt__affter">
          <p className="pt-5 md:text-base text-sm">
            Mọi thông tin quý khách cung cấp sẽ được bảo mật, chỉ phục vụ mục
            đích tư vấn, giới thiệu sản phẩm
          </p>
          <p className="pt-2  md:text-base text-sm">
            Cung cấp thông tin nhanh chống và cập nhật bảng giá mới nhất từ chủ
            đầu tư
          </p>
          <p className="pt-2  md:text-base text-sm">
            Hỗ trọ khách hàng tìm căn phù hợp với ngân sách. Không thu thêm bất
            cứ khoản phí nào
          </p>
          <p className="pt-2  md:text-base text-sm">
            Hỗ trợ thủ tục trực tiếp với chủ đầu tư, trước và sau khi bán hàng
          </p>
        </div>
      </div>
    </div>
  );
};
