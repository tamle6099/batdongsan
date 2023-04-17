import React from "react";
import { Villa } from "../Villa/Villa";

interface Props {
  lake: {
    title: string;
    context: string;
  };
  imageslider: [];
  tables: [];
}

export const LakeVilla = (props: Props) => {
  return (
    <>
      <Villa
        title={props.lake.title}
        context={props.lake.context}
        tables={props.tables}
        imageslider={props.imageslider}
      />
    </>
  );
};
