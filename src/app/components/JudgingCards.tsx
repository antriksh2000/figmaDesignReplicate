import React from "react";
import { JudgingCardsProps } from "../interface/Home";

const JudgingCards: React.FC<JudgingCardsProps> = ({ title, Heading }) => {
  return (
    <div className="bg-[#111322] rounded-lg mt-5 w-[257px] h-[121px] py-8 px-6 flex gap-1 flex-col">
      <h1 className="text-sm font-light text-[#CFD0D3]">{title}</h1>
      <h2 className="text-[#D3D3D5] text-3xl font-normal">{Heading}</h2>
    </div>
  );
};

export default JudgingCards;
