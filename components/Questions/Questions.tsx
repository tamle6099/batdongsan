import React, { useState } from "react";
import { Wrapper } from "../../Wrapper/Wrapper/Wrapper";
import Image from "next/image";

interface QuestionsProps {
  id: number;
  question: string;
  answer: string;
  acreage: string;
  price: string;
  totalprice: string;
  rentalprice: string;
  answer2: string;
  acreage2: string;
  price2: string;
  totalprice2: string;
  rentalprice2: string;
  isShowing: boolean;
}

interface Props {
  questions: QuestionsProps[];
}

export const Questions = (props: Props) => {
  const [current, setCurrent] = useState<QuestionsProps[]>(props.questions);
  const toggleIsLoading = (question: QuestionsProps) => {
    const newQuestions = current.map((v) => {
      if (v.id === question.id) {
        v.isShowing = !v.isShowing;
      }
      return v;
    });
    setCurrent(newQuestions);
  };
  return (
    <div className="question">
      <Wrapper id="question">
        <div className="container mx-auto">
          <h3 className="md:pb-10 pb-5 md:text-3xl text-xl uppercase text-center">
            Câu hỏi thường GẶP
          </h3>
          {current.map((item) => (
            <div key={item.id}>
              <div
                className="flex items-center justify-between md:w-3/6 w-full mx-auto border-b-2 pb-4 cursor-pointer border-amber-600 md:pt-6 pt-3"
                onClick={() => toggleIsLoading(item)}
              >
                <div className="flex items-center justify-center md:gap-5 gap-3">
                  <Image
                    width={30}
                    height={30}
                    src="/img/question_icon.svg"
                    alt=""
                  />

                  <p className="md:text-base text-sm">{item.question}</p>
                </div>
                {item.isShowing ? (
                  <div>
                    <Image
                      width={10}
                      height={10}
                      style={{ height: "100%", width: "100%" }}
                      src="/img/upicon.svg"
                      alt=""
                    />
                  </div>
                ) : (
                  <div>
                    <Image
                      width={10}
                      height={10}
                      style={{ height: "100%", width: "100%" }}
                      src="/img/downicon.svg"
                      alt=""
                    />
                  </div>
                )}
              </div>
              {item.isShowing && (
                <div className=" md:w-3/6 w-full mx-auto py-5 text-justify ">
                  <p className="md:text-base text-xs">{item.answer}</p>
                  {item.acreage && (
                    <p className="question-icon ml-3 md:text-base text-xs">
                      {item.acreage}
                    </p>
                  )}
                  {item.price && (
                    <p className="question-icon ml-3 md:text-base text-xs">
                      {item.price}
                    </p>
                  )}
                  {item.totalprice && (
                    <p className="question-icon ml-3 md:text-base text-xs">
                      {item.totalprice}
                    </p>
                  )}
                  {item.rentalprice && (
                    <p className="question-icon ml-3 md:text-base text-xs">
                      {item.rentalprice}
                    </p>
                  )}
                  {item.answer2 && (
                    <p className="pt-5 md:text-base text-xs">{item.answer2}</p>
                  )}
                  {item.price2 && (
                    <p className="question-icon ml-3 md:text-base text-xs">
                      {item.price2}
                    </p>
                  )}
                  {item.totalprice2 && (
                    <p className="question-icon ml-3 md:text-base text-xs">
                      {item.totalprice2}
                    </p>
                  )}
                  {item.rentalprice2 && (
                    <p className="question-icon ml-3 md:text-base text-xs">
                      {item.rentalprice2}
                    </p>
                  )}
                </div>
              )}
            </div>
          ))}
        </div>
      </Wrapper>
    </div>
  );
};
