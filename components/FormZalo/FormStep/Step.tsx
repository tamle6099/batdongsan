import { useForm } from "react-hook-form";
import { useFormData } from "../../../utils/context";
import Image from "next/image";

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
    <div className={`${formStep === 0 ? "block" : "hidden"}`}>
      <h3 className="md:text-2xl text-xl text-white uppercase font-normal">
        Đăng ký trải nghiệm
      </h3>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="md:mt-8 mt-4">
          <input
            type="name"
            id="name"
            className="placeholder:italic placeholder:text-white md:py-4 py-2 w-full outline-none text-white bg__exper px-4"
            placeholder="Họ và tên"
            {...register("name", { required: true })}
          />
        </div>
        <div className="mt-6">
          <input
            type="phone"
            id="zalo"
            className="placeholder:italic placeholder:text-white md:py-4 py-2 outline-none text-white w-full bg__exper px-4"
            placeholder="Số điện thoại Zalo"
            {...register("zalo", { required: true })}
          />
        </div>

        <div className="border-2 border-white mt-6 p-1 max-w-max">
          <button className="flex justify-between  bg-white p-3 items-center gap-10 hover:bg-[#A29061] hover:text-white text-[#4D4D56]  w-full ">
            <span className="md:text-base text-sm">
              Đăng ký tham quan dự án
            </span>
            <span>
              <Image
                height={18}
                width={18}
                src="/img/Arrow-button.svg"
                alt=""
              />
            </span>
          </button>
        </div>
      </form>
    </div>
  );
}
