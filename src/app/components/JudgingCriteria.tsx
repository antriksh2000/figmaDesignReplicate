import React from "react";
import JudgingCards from "./JudgingCards";

const JudgingCriteria = () => {
  return (
    <div className="text-white mt-48 ml-10 text-4xl font-semibold">
      Judging Criteria
      <div className="flex flex-row gap-5">
        <JudgingCards title="Quality of content" Heading="HD" />
        <JudgingCards title="Video production" Heading="Premium" />
        <JudgingCards title="Sound quality" Heading="Good" />
        <JudgingCards title="Social media upload" Heading="3+ platforms" />
      </div>
    </div>
  );
};

export default JudgingCriteria;
