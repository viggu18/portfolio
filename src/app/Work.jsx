import React from "react";
import OrdrioLogo from "../assets/ordrio.jpg";

const Work = () => {
  return (
    <div id="career">
      <h1 className="text-xl mb-3">Career</h1>
      <div className="flex flex-col gap-3 border border-1 border-slate-300 rounded-lg p-4 w-fit">
        <span>
          <span className="flex gap-2">
            <img src={OrdrioLogo} alt="Company Logo" className="h-8" />
            <h3 className="text-lg font-semibold">
              Ordrio Technologies Pvt Ltd.
            </h3>
          </span>
          <p className="text-slate-400 text-xs">Jr Software Developer</p>
        </span>
        <p className="text-sm max-w-[400px]">
          Worked as Junior Software Engineer with a daily goal of building pixel
          perfect UI aimed to make a difference on hundreds of customers
          bringing their business online. Built many reusable UI components and
          wrote flaw proof logic for complex tasks.
        </p>
      </div>
    </div>
  );
};

export default Work;
