import React from "react";

interface Props {
  title: string;
  content?: string;
  introduce?: string;
  introtre?: string;
  buttonContent?: string;
  href?: string;
}

export const Title = ({
  title,
  content,
  introduce,
  buttonContent,
  introtre,
  href,
}: Props) => {
  return (
    <div className="flex flex-col">
      <h3 className="mt-2 text-3xl font-semibold tracking-tight text-black sm:text-4xl uppercase">
        {title}
      </h3>
      {content && (
        <p className="mx-auto mt-6 max-w-1xl text-[16px] leading-8 text-black ">
          {content}
        </p>
      )}
      {introduce && (
        <div className="mx-auto max-w-1xl text-[16px] leading-8 text-black ">
          <p>{introduce}</p>
        </div>
      )}
      {introtre && (
        <div className="mx-auto max-w-1xl text-[16px] leading-8 text-black ">
          <p>{introtre}</p>
        </div>
      )}
      {buttonContent && (
        <div className="mt-8 flex gap-x-4 sm:justify-start">
          <a
            href={href}
            className="inline-block rounded-lg bg-sky-500 px-7 py-1.5 text-sm font-normal leading-7 text-white shadow-sm ring-1 ring-sky-500 hover:bg-sky-600 hover:ring-sky-600"
          >
            {buttonContent}
          </a>
        </div>
      )}
    </div>
  );
};
