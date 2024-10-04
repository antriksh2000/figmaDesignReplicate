'use client'
import React from "react";
import Testimonials from "./Testimonials";

const VideoSection = () => {
  return (
    <div className="text-center text-white min-h-[1600px] ">
      <div className="relative flex justify-center">
        <img src="./Rectangle.svg" alt="fasdf" className=" " />
        <div className="absolute top-52 left-20">
          <img src="./FirstTopLeftFilm.svg" alt="" className=" " />
        </div>
        <div className="absolute top-[350px] left-32">
          <img src="./videosectionsmallCamera.svg" alt="" className="" />
        </div>
        <div className="absolute top-[433px] right-0">
          <img src="./bigCamera.svg" alt="" className="" />
        </div>

        <h3 className="text-4xl absolute top-56 text-center font-semibold">
          Promo Video
        </h3>

        <div className="absolute top-72 w-[726px] h-[384px] rounded-lg bg-[#16243B]">
          <div className="relative flex justify-center items-center top-1/2 ">
            <div className=" absolute mb-5 ">
              <img src="./play-button.svg" alt="" />
            </div>
          </div>
        </div>
        <div className="absolute top-[930px] flex w-full justify-center">
    <Testimonials/>
    </div>

      </div>
    </div>
  );
};

export default VideoSection;
