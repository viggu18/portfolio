import React, { useState } from "react";

import { GitHub, LinkedIn, Instagram } from "@mui/icons-material";

const ProfileOptions = [
  { url: "https://github.com/viggu18", icon: GitHub },
  { url: "https://www.linkedin.com/in/viggu18/", icon: LinkedIn },
  { url: "https://www.instagram.com/vcn.o_o/", icon: Instagram },
];
const TabOptions = [
  {
    label: "Career",
    tag: "#career",
  },
  {
    label: "Projects",
    tag: "#project",
  },
  {
    label: "Skills",
    tag: "#skills",
  },
  {
    label: "Git Repos",
    tag: "#gitrepo",
  },
  {
    label: "Get in Touch",
    tag: "#getintouch",
  },
];

const Nav = () => {
  const [open, setOpen] = useState(false);

  function onMenuToggle() {
    setOpen((prev) => !prev);
  }

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
      <div className="2xl:flex xl:flex lg:flex md:hidden sm:hidden xs:hidden ">
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
      <div className="2xl:hidden xl:hidden lg:hidden">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          id="menu-button"
          className="h-6 w-6 cursor-pointer "
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          onClick={onMenuToggle}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>
      </div>
      {open && (
        <div
          className={`${
            open ? "" : "md:hidden sm:hidden xs:hidden"
          } w-full 2xl:hidden xl:hidden lg:hidden md:flex md:items-center md:w-auto my-2`}
        >
          <ul
            className="
              pt-4
              text-base text-gray-700
              md:flex
              md:justify-between 
              md:pt-0"
          >
            {TabOptions.map((item) => (
              <li key={item.tag} className="my-2 ">
                <a
                  href={item.tag}
                  className="rounded-lg px-3 py-2 text-slate-700 font-medium hover:bg-slate-700 hover:text-white"
                  onClick={onMenuToggle}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Nav;
