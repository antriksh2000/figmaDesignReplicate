import React from "react";

const Main = () => {
  return (
    <div className="flex flex-row justify-center mt-14 items-center">
      <div className="relative h-[600px] w-full">
        <div className="absolute -top-8 left-20">
          <img src="./FilmReelTop.svg" alt="" className=" left-20 top-7" />
        </div>
        <div className="absolute top-28 left-60">
          <img
            src="./FirstTopLeftFilm.svg"
            alt=""
            className=" left-20 top-7  "
          />
        </div>

        <div className="absolute top-80 left-32">
          <img src="./videoCamera.svg" alt="" className=" left-20 top-7  " />
        </div>

        <div className="absolute top-32 right-60">
          <img src="./filmReelBig.svg" alt="" className=" left-20 top-7  " />
        </div>

        <div className="absolute -top-8 right-40">
          <img src="./cameraRightTop.svg" alt="" className=" left-20 top-7  " />
        </div>

        <div className="absolute top-96 left-1/2 max-w-900 min-w-[850px] h-[360px] rounded-full bg-[#007AFFF7] opacity-30 filter blur-[90px] -translate-x-1/2 -translate-y-1/2" />

        <div className="relative flex flex-col items-center justify-center ">
          <h2 className="text-[#DEE0E3] max-w-[523px] font-semibold text-5xl text-center ">
            Galileo FX Video Review Contest 2024
          </h2>
          <h3 className=" mt-3 text-center text-[#CDD2D9] z-20">
            Share your Experiences,{" "}
            <span className="text-[#439EF4] font-semibold">Win $5,000</span>
          </h3>
          <button className="text-white mt-8 bg-[#439EF4] px-6 py-2 font-semibold uppercase rounded-lg">
            Enter the Contest
          </button>
          <img
            src="./FilmMan.svg"
            alt="filman"
            className="absolute ml-40 top-[400px] min-w-[233px] min-h-[251px] filter -translate-x-1/2 -translate-y-1/2"
          />
        </div>

        <div className="mt-[285px]">
          <div className="text-white bg-[#050718] h-52 z-10 relative   filter  blur-lg " />
        </div>
      </div>
    </div>
  );
};

export default Main;
