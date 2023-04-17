import { useFormData } from "../../utils/context";

export default function FormCompleted() {
  // const { data } = useFormData();

  return (
    <>
      <h2 className="h-[350px] w-[400px] text-white flex items-center">
        Cảm ơn anh chị đã quan tâm đến dự án, Tài liệu anh/chị vừa yêu cầu sẽ
        được hệ thống gửi tự động qua Zalo/ Viber. Trong trường hợp bị lỗi, sẽ
        có quản lí dự án liên hệ ngay để hỗ trợ{" "}
      </h2>

      {/* <pre>{JSON.stringify(data)}</pre> */}
    </>
  );
}
