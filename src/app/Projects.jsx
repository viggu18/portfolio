import React, { useEffect, useRef } from "react";
import ArrowCircleRightIcon from "@mui/icons-material/ArrowCircleRight";
import LanguageIcon from "@mui/icons-material/Language";
import { GitHub } from "@mui/icons-material";

const projects = [
  {
    name: "FlashType",
    description:
      "A typing speed tester application built using ReactJs. Contains custom logic to calculate the typing speed of the user and shows the typing speed in real time",
    url: "https://viggu18.github.io/flashtype",
    git: "https://github.com/viggu18/flashtype",
  },
  {
    name: "Name It",
    description:
      "Name Generator application which provides naming suggestions based on user input",
    url: "https://viggu18.github.io/name-it",
    git: "https://github.com/viggu18/name-it",
  },
  {
    name: "Uber Eats Clone",
    description:
      "Uber Eats App Clone built using Expo. Implemented cart functionality using Redux",
    url: "https://snack.expo.dev/@viggu18/23e4a6",
    git: "https://github.com/viggu18/uber-eats-clone-rn",
  },
  {
    name: "Deliveroo Clone",
    description: "Deliveroo App Clone built using Expo",
    url: "https://snack.expo.dev/@viggu18/5c1885",
    git: "https://github.com/viggu18/Deliveroo-clone-rn",
  },
  {
    name: "GPT-3 Intro",
    description:
      "Static website represeting the introduction of GPT-3. Focused on responsiveness and supporting all display sizes",
    url: "https://gpt3-intro.vercel.app/",
    git: "https://github.com/viggu18/GPT3-Intro",
  },
  {
    name: "Quiz App",
    description:
      "Small quiz app consiting of 4 questions. Wrote custom logic to calculate the score.",
    url: "https://quiz-app-kappa-wheat.vercel.app/",
    git: "https://github.com/viggu18/quiz-app",
  },
];

const Projects = () => {
  const projectRef = useRef(null);
  const onWheel = (e) => {
    if (e?.deltaY === 0) {
      return;
    } else if (!e) {
      projectRef.current.scrollTo({
        left: projectRef.current.scrollLeft + 125 * 4,
        behavior: "smooth",
      });
    } else {
      e.preventDefault();
      projectRef.current.scrollTo({
        left: projectRef.current.scrollLeft + e.deltaY * 4,
        behavior: "smooth",
      });
    }
  };

  useEffect(() => {
    if (projectRef) {
      let ref = projectRef.current;
      ref.addEventListener("wheel", onWheel);
      return () => ref.removeEventListener("wheel", onWheel);
    }
  }, []);

  return (
    <div id="project">
      <span className="flex justify-between items-center ">
        <h1 className="text-xl">Projects</h1>
        <span
          className="text-[gray] text-sm cursor-pointer flex gap-2"
          onClick={() => onWheel()}
        >
          <p className="md:not-sr-only sm:sr-only xs:sr-only">
            Scroll for more
          </p>
          <ArrowCircleRightIcon />
        </span>
      </span>
      <div
        className="flex gap-3 p-3 flex-auto overflow-x-scroll hide-scroll-bar select-none"
        id="projects"
        ref={projectRef}
      >
        {projects.map((item) => (
          <span
            className="p-5 shadow-lg rounded-xl border border-gray-1 text-black hover:text-[#D7EDE1]  flex-shrink-0  xl:w-[250px] lg:w-[250px] md:w-1/2 sm:w-1/2 xs:w-full hover:scale-105 
            bg-gradient-to-r from-[#25aae1] to-[#40e495]
            hover:from-[#40e495] hover:to-[#2bb673]"
            key={item.url}
          >
            <h3>{item.name}</h3>
            <a target="_blank" rel="noreferrer" href={item.url}>
              <LanguageIcon className="cursor-pointer mx-1 hover:text-black " />
            </a>
            <a target="_blank" rel="noreferrer" href={item.git}>
              <GitHub className="cursor-pointer mx-1 hover:text-black " />
            </a>
            <p className="text-xs my-2">{item.description}</p>
          </span>
        ))}
      </div>
    </div>
  );
};

export default Projects;
