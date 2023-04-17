import clsx from "clsx";
import React, { Children, ReactNode } from "react";

interface Props {
  children: ReactNode;
  id: string;
  className?: string;
}

export const Wrapper = (props: Props) => {
  return (
    <div className={clsx(` py-12 md:py-24`, props.className)} id={props.id}>
      {props.children}
    </div>
  );
};
