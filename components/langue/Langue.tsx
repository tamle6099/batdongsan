import React from "react";
import { Wrapper } from "../../Wrapper/Wrapper/Wrapper";
import Image from "next/image";

interface Props {
  langue: {
    title: string;
    context: string;
    intro: string;
  };
  langueslie: {
    context: string;
    image: string;
    text: string;
  }[];
}

export default function Langue(props: Props) {
  return (
    <div className="langue-bg">
      <Wrapper id="langue">
        <div className="flex container mx-auto gap-10 langue__flex">
          <div className="md:w-2/6 w-full">
            <h3 className="md:text-3xl text-xl text-[#4D4D56] font-semibold pb-5 uppercase">
              {props.langue.title}
            </h3>
            <p className="md:text-base text-sm">{props.langue.context}</p>
            <p className="pb-10 md:text-base text-sm">{props.langue.intro}</p>
          </div>
          <div className="grid md:grid-cols-2 grid-cols-1 w-full md:w-4/6 gap-5">
            {props.langueslie.map((item, index) => (
              <figure
                className="test col-xs-6 flex items-center justify-center"
                id="rotate"
                key={index}
              >
                <Image width={500} height={500} src={item.image} alt="" />
                <span className="hoverspan text-white">{item.text}</span>
                <div className="text">
                  <p className="text-white hovertext md:text-base text-xs">
                    {item.context}
                  </p>
                </div>
              </figure>
            ))}
          </div>
        </div>
      </Wrapper>
    </div>
  );
}
