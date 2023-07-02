import React from "react";

import { GitHub, LinkedIn, Instagram } from "@mui/icons-material";

const ProfileOptions = [
  { url: "https://github.com/viggu18", icon: GitHub },
  { url: "https://www.linkedin.com/in/viggu18/", icon: LinkedIn },
  { url: "https://www.instagram.com/vcn.o_o/", icon: Instagram },
];
const TabOptions = [
  {
    label: "Projects",
    tag: "#projects",
  },
];

const Nav = () => {
  return (
    <nav className="max-w-screen-xl flex flex-wrap justify-between rounded-lg items-center p-4 bg-gradient-to-r from-[#1a5e86] to-[#D7EDE1]">
      <div className="flex items-center gap-4">
        <div>
          <a target="_blank" rel="noreferrer" href="https://vercel.com/viggu18">
            <span className="sr-only">User Logo</span>
            <img
              className="h-10 w-10 rounded-full"
              src="https://avatars.githubusercontent.com/u/20420550?v=4"
              alt=""
            />
          </a>
        </div>
        {ProfileOptions.map((item, index) => (
          <a target="_blank" key={index} href={item.url} rel="noreferrer">
            <item.icon />
          </a>
        ))}
      </div>
      <div className="">
        {TabOptions.map((item) => (
          <a
            key={item.tag}
            href={item.tag}
            className="rounded-lg px-3 py-2 text-slate-700 font-medium hover:bg-slate-700 hover:text-white"
          >
            {item.label}
          </a>
        ))}
      </div>
    </nav>
  );
};

export default Nav;
