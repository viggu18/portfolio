import React, { useEffect, useRef, useState } from "react";
import ArrowCircleRightIcon from "@mui/icons-material/ArrowCircleRight";

const GitRepo = () => {
  const repoRef = useRef(null);

  const [projects, setProjects] = useState([]);

  async function getUser() {
    // https://api.github.com/users/viggu18/repos
    // let response = await fetch("https://api.github.com/users/viggu18");

    let response = await fetch("https://api.github.com/users/viggu18/repos");
    let allRepo = await response.json();

    setProjects(allRepo);
  }

  useEffect(() => {
    getUser();
  }, []);

  const onWheel = (e) => {
    if (e?.deltaY === 0) {
      return;
    } else if (!e) {
      repoRef.current.scrollTo({
        left: repoRef.current.scrollLeft + 125 * 4,
        behavior: "smooth",
      });
    } else {
      e.preventDefault();
      repoRef.current.scrollTo({
        left: repoRef.current.scrollLeft + e.deltaY * 4,
        behavior: "smooth",
      });
    }
  };

  useEffect(() => {
    if (repoRef) {
      let ref = repoRef.current;
      ref.addEventListener("wheel", onWheel);
      return () => ref.removeEventListener("wheel", onWheel);
    }
  }, []);

  return (
    <div id="gitrepo" className=" hide-scroll-bar">
      <span className="flex justify-between items-center ">
        <h1 className="text-xl text-bold">Git Repositories</h1>
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
        id="repo"
        ref={repoRef}
      >
        {projects.map((item) => (
          <div
            className="p-5 shadow-lg rounded-xl border border-gray-1 bg-gradient-to-r text-[#D7EDE1] from-[#287aa9] to-[#6abbea] hover:scale-110 hover:from-[#86c2e5] hover:to-[#48647d]  flex-shrink-0  xl:w-[250px] lg:w-[250px] md:w-1/2 sm:w-1/2 xs:w-full "
            key={item.id}
          >
            <a
              target="_blank"
              rel="noreferrer"
              href={item.html_url}
              className=" grid gap-2"
            >
              <h3 className="text-bold text-lg">{item.name}</h3>
              <p className="text-xs font-medium break-words overflow-hidden xl:min-w-[200px] lg:min-w-[200px] md:min-w-[100%] sm:w-[100%]">
                {item.description}
              </p>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GitRepo;
