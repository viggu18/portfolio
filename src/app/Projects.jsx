import React, { useEffect, useRef, useState } from "react";

const Projects = () => {
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

  useEffect(() => {
    if (repoRef) {
      const repo = repoRef.current;

      const onWheel = (e) => {
        if (e.deltaY == 0) return;
        e.preventDefault();
        repo.scrollTo({
          left: repo.scrollLeft + e.deltaY * 4,
          behavior: "smooth",
        });
      };

      repo.addEventListener("wheel", onWheel);
      return () => repo.removeEventListener("wheel", onWheel);
    }
  }, []);

  return (
    <div id="#projects" className="p-5 hide-scroll-bar">
      <span className="xl:flex lg:flex md:flex justify-between items-center sm:grid xs:grid ">
        <h1 className="text-xl text-bold">Git Repositories</h1>
        <p className="text-[gray] text-sm">Scroll for more</p>
      </span>
      <div
        className="flex gap-3 overflow-x-scroll hide-scroll-bar"
        id="repo"
        ref={repoRef}
      >
        {projects.map((item) => (
          <div
            className="xl:w-[20%] md:w-1/2 sm:w-1/2 xs:w-full drop-shadow-lg shadow-lg flex-shrink-0"
            key={item.id}
          >
            <a target="_blank" rel="noreferrer" href={item.html_url}>
              <h3 className="text-semibold">{item.name}</h3>
              <p className="text-xs break-words">{item.description}</p>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
