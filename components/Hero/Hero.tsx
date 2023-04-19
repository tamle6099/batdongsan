import Image from "next/image";
import React from "react";
import Lottie from "react-lottie";
// import * as animationData from "../../public/images/img-banner.json";

interface Props {
  video: string;
  title: string;
  dsc: string;
  // logo: string;
  land: string;
  href: string;
}

export const Hero = (props: Props) => {
  return (
    <>
      <div id="home" className="bg-white relative md:min-h-screen ">
        <div className="md:absolute md:top-0 md:left-0 md:right-0 md:bottom-0 md:overflow-hidden">
          <video
            className="w-full hero_mobie "
            autoPlay
            loop
            muted
            src={props.video}
          ></video>
        </div>
      </div>
    </>
  );
};
