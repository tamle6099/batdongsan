import React from "react";
import { Villa } from "../Villa/Villa";

interface Props {
  hill: {
    title: string;
    context: string;
  };
  imageslider: [];
  tables: [];
}

export const HillVilla = (props: Props) => {
  return (
    <div>
      <Villa
        title={props.hill.title}
        context={props.hill.context}
        tables={props.tables}
        imageslider={props.imageslider}
      />
    </div>
  );
};
