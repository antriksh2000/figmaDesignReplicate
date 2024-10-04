import React from "react";
const Header = () => {
  return (
    <div className="flex flex-row justify-around">
      <div className="py-5 ">
        <img src="./logo.svg" alt="logo" className=" w-auto" />
      </div>
      <div className="flex flex-row">
        <ul className="text-[#9B9CA2] py-[26px] flex flex-row gap-7 m-0">
          <li className="text-white cursor-pointer  border-b pb-5 w-20 justify-center items-center text-center border-[#439EF4]">
            Home
          </li>
          <li className="cursor-pointer">Rules & Guidelines</li>
          <li className="cursor-pointer">Submission</li>
          <li className="cursor-pointer">Judging Panel</li>
          <li className="cursor-pointer">Gallery</li>
          <li className="cursor-pointer">Winners</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
