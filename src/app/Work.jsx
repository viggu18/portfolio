import React from "react";

const WorkPlaces = [
  {
    logo: "https://media.licdn.com/dms/image/D560BAQFefrVKr430oA/company-logo_200_200/0/1688105705057/ziniosedge_logo?e=1711584000&v=beta&t=MznhV2-GjShu_lZ12dvbw-suQFPrFGENYWPpVsD6wZE",
    name: "ZiniosEdge Software Limited",
    designation: "Associate Software Developer",
    description:
      "Worked as Associate Software Engineer building a banking system based on crypto-currencies in an agile environment using Fireblocks and Kraken API. Took part in code reviews and single handedly built a system which handles all the transactions along with accounts and internal ledgers.",
  },
  {
    logo: "https://media.licdn.com/dms/image/D4E0BAQFgHXqXPKIvuA/company-logo_200_200/0/1666414916127/ordrio_logo?e=1711584000&v=beta&t=wyHsaklzLUoPpFkCPCPZwI0WyEhZlEUALgfstt6IG5s",
    name: "Ordrio Technologies Pvt Ltd.",
    designation: "Jr Software Developer",
    description:
      "Worked as Junior Software Engineer with a daily goal of building pixel perfect UI aimed to make a difference on hundreds of customers bringing their business online. Built many reusable UI components and wrote flaw proof logic for complex tasks.",
  },
];
const Work = () => {
  return (
    <div id="career">
      <h1 className="text-xl mb-3">Career</h1>
      <div className="flex gap-3">
        {WorkPlaces.map((item) => (
          <div className="flex flex-col gap-3 border border-1 border-slate-300 rounded-lg p-4 w-fit">
            <span>
              <span className="flex gap-2">
                <img src={item.logo} alt="Company Logo" className="h-8" />
                <h3 className="text-lg font-semibold">{item.name}</h3>
              </span>
              <p className="text-slate-400 text-xs">{item.designation}</p>
            </span>
            <p className="text-sm max-w-[400px]">{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Work;
