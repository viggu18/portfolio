import React, { useEffect, useRef, useState } from "react";

import {
  GitHub,
  LinkedIn,
  Instagram,
  ArrowDownwardOutlined,
} from "@mui/icons-material";

const ProfileOptions = [
  { url: "https://github.com/viggu18", icon: GitHub, title: "Github" },
  {
    url: "https://www.instagram.com/vcn.o_o/",
    icon: Instagram,
    title: "Instagram",
  },
  {
    url: "https://www.linkedin.com/in/viggu18/",
    icon: LinkedIn,
    title: "LinkedIn",
  },
  {
    url: "https://leetcode.com/nayakvignesh18/",
    icon: "https://leetcode.com/_next/static/images/logo-dark-c96c407d175e36c81e236fcfdd682a0b.png",
    isImage: true,
    title: "Leetcode",
  },
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
  const menuRef = useRef(null);
  const [open, setOpen] = useState(false);

  function onMenuToggle() {
    setOpen((prev) => !prev);
  }

  useEffect(() => {
    function handleClickOutside(event) {
      if (menuRef.current && !menuRef.current.contains(event.target) && open) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [menuRef, open]);

  return (
    <nav className="w-full max-w-screen flex flex-wrap justify-between rounded-lg items-center p-4 bg-gradient-to-r from-[#1a5e86] to-[#D7EDE1]">
      <div className="flex items-center gap-4">
        <div>
          <a target="_blank" rel="noreferrer" href="https://vercel.com/viggu18">
            <span className="sr-only">User Logo</span>
            <img
              className="h-10 w-10 rounded-full "
              src="https://avatars.githubusercontent.com/u/20420550?v=4"
              alt=""
            />
          </a>
        </div>
        {ProfileOptions.map((item, index) => (
          <a target="_blank" key={index} href={item.url} rel="noreferrer">
            {item.isImage ? (
              <img
                src={item.icon}
                alt="icon"
                className="h-6 w-6 grayscale"
                title={item}
              />
            ) : (
              <item.icon />
            )}
          </a>
        ))}
      </div>
      <div className="2xl:flex items-center xl:flex lg:flex md:hidden sm:hidden xs:hidden ">
        {TabOptions.map((item) => (
          <a
            key={item.tag}
            href={item.tag}
            className="rounded-lg px-3 py-2 text-slate-700 font-medium hover:bg-slate-700 hover:text-white cursor-pointer"
          >
            {item.label}
          </a>
        ))}
        <a
          href="https://drive.google.com/file/d/1KwlfJ74JWnoayT5Kre5Iz5WK1ozL6zvK/view?usp=sharing"
          target="_blank"
          rel="noreferrer"
          className="rounded-lg px-3 py-2 text-slate-700 font-medium hover:bg-slate-700 hover:text-white cursor-pointer"
        >
          Resume <ArrowDownwardOutlined />
        </a>
      </div>

      <div className="lg:hidden xl:hidden 2xl:hidden">
        <div className="relative">
          <button className="text-gray-700 font-semibold py-2 px-4 rounded inline-flex items-center">
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
          </button>

          <ul
            ref={menuRef}
            className={`${
              open ? "flex flex-col" : "hidden"
            } absolute pt-1 text-base text-gray-700 w-fit bg-white drop-shadow-lg py-2 px-1 rounded-md min-w-[200px] duration-200 right-1`}
          >
            {TabOptions.map((item, index) => (
              <li key={item.tag} className="p-1">
                <a
                  href={item.tag}
                  className="rounded-lg py-4"
                  onClick={onMenuToggle}
                >
                  {item.label}
                </a>
              </li>
            ))}
            <li className="p-1">
              <a
                href="https://drive.google.com/file/d/1KwlfJ74JWnoayT5Kre5Iz5WK1ozL6zvK/view?usp=sharing"
                target="_blank"
                rel="noreferrer"
                className="rounded-lg px-3 py-4"
              >
                Resume <ArrowDownwardOutlined />
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* <div class="relative inline-block text-left">
        <div>
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
        </div>

        <div
          class={
            "md:hidden sm:hidden xs:hidden absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
          }
          aria-orientation="vertical"
        >
          <div class="py-1">
            <ul
              className="
              text-base text-gray-700
              md:flex
              md:justify-between 
              md:pt-0"
            >
              {TabOptions.map((item, index) => (
                <li key={item.tag}>
                  <a
                    href={item.tag}
                    className="rounded-lg px-3 py-4 text-slate-700 font-medium hover:bg-slate-700 hover:text-white"
                    role="menuitem"
                    tabindex="-1"
                    id="menu-item-0"
                    onClick={onMenuToggle}
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div> */}
      {/* {open && (
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
            <li className="my-2">
              <a
                href="https://drive.google.com/file/d/1MRHVFfzJ60KIiF5tOgmR3zLSSxC8RdfM/view?usp=sharing"
                target="_blank"
                rel="noreferrer"
                className="rounded-lg px-3 py-2 text-slate-700 font-medium hover:bg-slate-700 hover:text-white cursor-pointer"
              >
                Resume <ArrowDownwardOutlined />
              </a>
            </li>
          </ul>
        </div>
      )} */}
    </nav>
  );
};

export default Nav;
