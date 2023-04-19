import Image from "next/image";
import React from "react";

import "video-react/dist/video-react.css";
type Props = {};

export default function Interior({}: Props) {
  return (
    <div className="md:py-24 py-10">
      <h3 className="md:text-4xl text-xl text-black font-semibold text-center pb-10 uppercase">
        Tiêu chuẩn nội thất bàn giao
      </h3>

      <Image
        width={1200}
        height={1200}
        src="/img/video.jpg"
        alt=""
        className="w-full"
      />
      <div className="max-w-4xl mx-auto text-center md:pt-20 pt-5 px-5 md:px-0">
        <p className="text-justify md:text-base text-xs">
          Trên đây là Cận cảnh căn biệt thự thí điểm lần 1 - Beach Villa thuộc
          dự án Park Hyatt Phu Quoc Residences do Địa ốc MGV thực hiện. Qua
          video, khách hàng có thể trải nghiệm một cách khách quan ngôn ngữ
          thiết kế, chi tiết bên trong từng vật liệu nội thất do tập đoàn khách
          sạn Hyatt Corporation khắt khe lựa chọn.
        </p>
        <p className="text-justify pt-5 md:text-base text-xs">
          Biệt thự thí điểm của bất kỳ dự án bất động sản nghỉ dưỡng của tập
          đoàn khách sạn đa quốc gia Hyatt nói chung hay thương hiệu Park Hyatt
          nói riêng đều được chăm chút tỉ mỉ, bởi chúng có ý nghĩa quan trọng về
          quy trình kỹ thuật, truyền tải phong cách sống đẳng cấp mang đậm dấu
          ấn thương hiệu.
        </p>
        <p className="text-justify pt-5 md:text-base text-xs">
          {" "}
          Yếu tố "thí điểm'' nằm trong nguyên tắc tiêu chuẩn của Hyatt. Theo đó
          công trình sẽ phải qua ba vòng đánh giá và điều chỉnh chặt chẽ từng
          chi tiết để trở thành căn biệt thự mẫu hoàn thiện, đáp ứng đủ mọi tiêu
          chí đã cam kết với gia chủ về chất lượng và đẳng cấp công trình. Đồng
          thời, sản phẩm thí điểm này cũng là cách mô tả chính xác và trực quan
          nhất với gia chủ về bất động sản mà họ sẽ sở hữu khi dự án hoàn thành.
        </p>
      </div>
    </div>
  );
}
