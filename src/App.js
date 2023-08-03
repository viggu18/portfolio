import "./App.css";
import Aboutme from "./app/Aboutme";
import Nav from "./app/Nav";
import GitRepo from "./app/GitRepo";
import ContactMe from "./app/ContactMe";
import Skills from "./app/Skills";
import Work from "./app/Work";
import Projects from "./app/Projects";

function App() {
  return (
    <div className="App">
      <div className="flex items-center justify-center h-screen min-w-full bg-gradient-to-r from-[#1a5e86] to-[#D7EDE1] overflow-hidden">
        {/* <div
          id="container"
          className="overflow-y-scroll  bg-white rounded-lg drop-shadow-lg relative"
        > */}
        <div className="overflow-y-hidden h-[90vh] hide-scroll-bar flex flex-col max-h-[80vh] min-h-[90vh] xl:w-[80%] lg:w-[80%] md:w-[90%] sm:w-[90%] xs:w-[90%] bg-white">
          <Nav />
          <div className="flex-1 xl:p-8 lg:p-8 md:p-8 sm:p-6 xs:p-6 h-fit overflow-x-hidden hide-scroll-bar flex flex-col gap-10">
            <Aboutme />
            <Work />
            <Projects />
            <Skills />
            <GitRepo />
            <ContactMe />
          </div>
        </div>
      </div>
      {/* </div> */}
    </div>
  );
}

export default App;
