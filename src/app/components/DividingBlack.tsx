import React from "react";

const DividingBlack = () => {
  return (
    <div className=" flex gap-5 mt-36 relative text-white">
      <div className="absolute -top-14 -left-10">
        <img src="./videoCamera.svg" alt="" />
      </div>
      <div className="absolute top-[310px] left-52">
        <img src="./cardReel.svg" alt="" />
      </div>

      <div className="flex flex-row gap-[114px]">
        <div className="bg-[rgb(15,19,35)]   min-w-[352px]  h-[449px] rounded-lg">
          <div className="mt-8 ml-8 gap-6 flex flex-col">
            <div>
              <h2 className="text-[#CFCFD2] text-sm ">Prize Amount</h2>
              <h3 className="text-[#439EF4] text-5xl font-bold">$5,000</h3>
            </div>
            <div className="flex gap-2 flex-col">
              <h3 className="text-[#CFCFD2] text-sm">Minimum participants</h3>
              <h3 className="text-4xl text-[#CFCFD2]">09</h3>
            </div>
            <div className="flex gap-2 flex-col">
              <h3 className="text-[#CFCFD2] text-sm">Submission Deadline</h3>
              <h3 className="text-4xl text-[#CFCFD2]">10 Oct ‘24</h3>
            </div>
          </div>
        </div>
        <div className="mt-10">
          <h2 className="text-4xl max-w-[445px] font-semibold">
            What is Galileo FX Video Contest 2024?
          </h2>
          <p className="max-w-[600px] mt-3 text-base text-[#9B9CA2]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut non sine
            causa ex iis memoriae ducta sit disciplina. Illa videamus, quae a te
            de amicitia dicta sunt. Quid turpius quam sapientis vitam ex
            insipientium sermone pendere? Duo Reges: constructio interrete. Ille
            vero, si insipiens-quo certe, quoniam tyrannus -, numquam beatus;
            Quod cum accidisset ut alter alterum necopinato videremus, surrexit
            statim.
          </p>
          <p className="max-w-[600px] mt-2 text-base text-[#9B9CA2]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut non sine
            causa ex iis memoriae ducta sit disciplina. Illa videamus, quae a te
            de amicitia dicta sunt. Quid turpius quam sapientis vitam ex
            insipientium sermone pendere?
          </p>
          <button className="text-white mt-8 bg-[#439EF4] px-6 py-2 font-semibold uppercase rounded-lg">
            Enter the Contest
          </button>
        </div>
      </div>
    </div>
  );
};

export default DividingBlack;
