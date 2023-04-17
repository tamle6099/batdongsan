import { useFormData } from "../../utils/context";

export default function FormCompleted() {
  // const { data } = useFormData();

  return (
    <div className="flex items-center justify-center">
      <h2 className="text-white ">
        Cảm ơn anh chị đã quan tâm đến dự án, Tài liệu anh/chị vừa yêu cầu sẽ
        được hệ thống gửi tự động qua Zalo/ Viber. Trong trường hợp bị lỗi, sẽ
        có quản lí dự án liên hệ ngay để hỗ trợ{" "}
      </h2>

      {/* <pre>{JSON.stringify(data)}</pre> */}
    </div>
  );
}
