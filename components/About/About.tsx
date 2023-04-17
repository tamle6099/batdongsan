import React from "react";
import { Wrapper } from "../../Wrapper/Wrapper/Wrapper";
import { Title } from "../Title/Title";

interface Props {
  heading: {
    title: string;
    content?: string;
    image?: string;
    introduce?: string;
    introtre?: string;
    buttonContent?: string;
  };
  contents: {
    amount: string;
    name: string;
  }[];
  href?: string;
}

export const About = (props: Props) => {
  return (
    <div className="ltvt__bg">
      <Wrapper id="about">
        <div className="container">
          <div className="flex md:flex-1 ltvt__flex pb-5 md:gap-20 gap-10 ">
            <div className="order-2 md:order-none">
              <img
                src={props.heading.image}
                alt=""
                className=" w-full h-full"
              />
            </div>
            <div className="text-justify md:w-8/12 w-full order-1 md:order-none">
              <div className="ltvt__mobile">
                <h3 className="md:text-4xl text-xl text-white uppercase font-semibold ">
                  {props.heading.title}
                </h3>
                <p className="text-white md:text-base text-sm pt-8">
                  {props.heading.content}
                </p>
                <p className="text-white md:text-base text-sm pt-8">
                  {props.heading.introduce}
                </p>
                <p className="text-white md:text-base text-sm pt-8">
                  {props.heading.introtre}
                </p>
              </div>
              <div className=" bg-white mt-5 rounded-md ">
                <div className="ltvt__grid grid  md:grid-flow-col grid-cols-1">
                  {props.contents.map((conten, index) => (
                    <div
                      key={index}
                      className="flex md:p-4 p-3 lvt__border__bottom ltvt__border__left md:gap-3 gap-2 "
                    >
                      <p className="lvtv__amount pl-5">
                        <span className="ltvt__span"></span>
                        {index + 1}
                      </p>
                      <p className="md:pl-5 pl-3 text-[#A29061] md:text-base text-sm">
                        {conten.name}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </Wrapper>
    </div>
  );
};
