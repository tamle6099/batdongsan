import { useForm } from "react-hook-form";
import { useFormData } from "../../../utils/context";

export default function Step({ formStep, nextFormStep }: any) {
  // const { setFormValues } = useFormData();

  const {
    handleSubmit,
    formState: { errors },
    register,
  } = useForm({ mode: "all" });

  const onSubmit = (values: any) => {
    // setFormValues(values);
    nextFormStep();
  };

  return (
    <div
      className={`${formStep === 0 ? "block" : "hidden"} md:w-10/12 w-full `}
    >
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="border-b-2 border-slate-500 py-2 ">
          <input
            type="name"
            id="name"
            className="placeholder:italic placeholder:text-white bg-[#0D314E] md:pt-8 pt-5 w-full outline-none text-white"
            placeholder="Họ và tên"
            {...register("name", { required: true })}
          />
          {errors.name && <p className="text-red-500">Xin vui lòng nhập tên</p>}
        </div>
        <div className="border-b-2 border-slate-500 py-2">
          <input
            type="phone"
            id="phone"
            className="placeholder:italic placeholder:text-white bg-[#0D314E] pt-6 outline-none text-white"
            placeholder="Số điện thoại"
            {...register("phone", { required: true })}
          />
          {errors.phone && (
            <p className="text-red-500">Xin vui lòng nhập số điện thoại</p>
          )}
        </div>
        <div className="border-b-2 border-slate-500 py-2">
          <input
            type="email"
            id="email"
            className="border-none p-0 placeholder:italic placeholder:text-white bg-[#0D314E] pt-6  w-full outline-none text-white"
            placeholder="Email"
            {...register("email", {
              required: true,
            })}
          />
          {errors.email && (
            <p className="text-red-500">Xin vui lòng nhập số điện thoại</p>
          )}
        </div>
        <div className="border-2 border-white md:mt-16 mt-10 p-1 max-w-max">
          <button className="flex justify-between  bg-white p-3 items-center gap-10 hover:bg-[#A29061] hover:text-white text-[#4D4D56]  w-full ">
            <span className="">Tôi muốn nhận thông tin</span>
            <span>
              <img src="/img/Arrow-button.svg" alt="" />
            </span>
          </button>
        </div>
      </form>
    </div>
  );
}
