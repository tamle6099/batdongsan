import React, { useState } from "react";
import { Modal, ModalContent } from "../../utils/modal";
import Image from "next/image";
interface Props {
  images: {
    image: string;
  }[];
}

export const Sitetour = (props: Props) => {
  const [current, setCurrent] = useState<string>("");
  const [isOpen, setIsopen] = useState(false);
  const showModal = (image: string) => {
    setIsopen((prev) => !prev);
    setCurrent(image);
  };

  return (
    <div className="sitetour md:py-20 py-10">
      <div className="container mx-auto ">
        <h3 className="md:text-4xl text-xl text-[#4D4D56] text-center md:pb-20 pb-10 uppercase">
          Một số hình ảnh Sitetour tham quan dự án
        </h3>
        <div className="">
          <div className="hover01 column grid md:grid-cols-4 grid-cols-2 md:gap-5 gap-3">
            {props.images.map((item, index) => (
              <Modal onOpen={() => showModal(item.image)} key={index}>
                <div className="holder">
                  <div className="holder__img">
                    <Image
                      width={500}
                      height={500}
                      src={item.image}
                      alt=""
                      className="w-full h-full"
                      key={index}
                    />
                  </div>
                </div>
                {isOpen && (
                  <ModalContent onClose={() => setIsopen(true)}>
                    <Image
                      width={1200}
                      height={1200}
                      src={current}
                      alt=""
                      className="w-full h-full"
                      key={index}
                    />
                  </ModalContent>
                )}
              </Modal>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
