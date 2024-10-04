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
        <img
  src={`data:image/svg+xml;utf8,${encodeURIComponent(`
    <svg xmlns="http://www.w3.org/2000/svg" width="209" height="209" viewBox="0 0 209 209" fill="none">
      <g clip-path="url(#clip0_18_794)">
        <g filter="url(#filter0_f_18_794)">
          <path d="M189.406 176.344H149.696C166.999 165.443 179.783 148.661 185.697 129.085C191.611 109.509 190.258 88.4561 181.886 69.7985C173.515 51.1408 158.687 36.1336 140.132 27.5375C121.576 18.9414 100.541 17.3345 80.8952 23.0125C61.2494 28.6904 44.3146 41.2714 33.2059 58.4409C22.0973 75.6104 17.562 96.2138 20.4343 116.461C23.3065 136.708 33.3933 155.237 48.839 168.64C64.2846 182.042 84.0504 189.417 104.5 189.407H189.406C191.139 189.407 192.8 188.718 194.025 187.494C195.25 186.269 195.938 184.607 195.938 182.875C195.938 181.143 195.25 179.482 194.025 178.257C192.8 177.032 191.139 176.344 189.406 176.344ZM65.3127 120.828C62.0833 120.828 58.9264 119.871 56.2413 118.077C53.5561 116.282 51.4633 113.732 50.2275 110.749C48.9917 107.765 48.6683 104.482 49.2983 101.315C49.9284 98.1475 51.4835 95.2381 53.767 92.9545C56.0505 90.671 58.9599 89.1159 62.1273 88.4859C65.2946 87.8559 68.5776 88.1792 71.5612 89.415C74.5448 90.6509 77.0949 92.7437 78.8891 95.4288C80.6832 98.114 81.6408 101.271 81.6408 104.5C81.6408 108.831 79.9206 112.984 76.8584 116.046C73.7963 119.108 69.6432 120.828 65.3127 120.828ZM104.5 160.016C101.271 160.016 98.1139 159.058 95.4288 157.264C92.7437 155.47 90.6508 152.92 89.415 149.936C88.1792 146.953 87.8558 143.67 88.4858 140.502C89.1159 137.335 90.671 134.426 92.9545 132.142C95.238 129.859 98.1474 128.303 101.315 127.673C104.482 127.043 107.765 127.367 110.749 128.603C113.732 129.838 116.282 131.931 118.077 134.616C119.871 137.301 120.828 140.458 120.828 143.688C120.828 148.018 119.108 152.171 116.046 155.233C112.984 158.296 108.831 160.016 104.5 160.016ZM104.5 81.6409C101.271 81.6409 98.1139 80.6833 95.4288 78.8891C92.7437 77.0949 90.6508 74.5448 89.415 71.5613C88.1792 68.5777 87.8558 65.2947 88.4858 62.1273C89.1159 58.96 90.671 56.0506 92.9545 53.767C95.238 51.4835 98.1474 49.9284 101.315 49.2984C104.482 48.6684 107.765 48.9917 110.749 50.2275C113.732 51.4634 116.282 53.5562 118.077 56.2413C119.871 58.9265 120.828 62.0834 120.828 65.3128C120.828 69.6433 119.108 73.7964 116.046 76.8585C112.984 79.9206 108.831 81.6409 104.5 81.6409ZM127.36 104.5C127.36 101.271 128.317 98.114 130.111 95.4288C131.906 92.7437 134.456 90.6509 137.439 89.415C140.423 88.1792 143.706 87.8559 146.873 88.4859C150.041 89.1159 152.95 90.671 155.233 92.9545C157.517 95.2381 159.072 98.1475 159.702 101.315C160.332 104.482 160.009 107.765 158.773 110.749C157.537 113.732 155.444 116.282 152.759 118.077C150.074 119.871 146.917 120.828 143.688 120.828C139.357 120.828 135.204 119.108 132.142 116.046C129.08 112.984 127.36 108.831 127.36 104.5Z" fill="#007AFF" fill-opacity="0.4"/>
        </g>
      </g>
      <defs>
        <filter id="filter0_f_18_794" x="-0.311989" y="-0.229156" width="216.154" height="209.54" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
          <feFlood flood-opacity="0" result="BackgroundImageFix"/>
          <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
          <feGaussianBlur stdDeviation="9.95238" result="effect1_foregroundBlur_18_794"/>
        </filter>
        <clipPath id="clip0_18_794">
          <rect width="209" height="209" fill="white"/>
        </clipPath>
      </defs>
    </svg>
  `)}`}
  alt=""
  className="left-20 top-7"
/>
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
