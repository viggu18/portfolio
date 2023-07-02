import "./App.css";
import Nav from "./app/Nav";
import Projects from "./app/Projects";

function App() {
  return (
    <div className="App">
      <div className="flex items-center justify-center min-h-screen min-w-full bg-gradient-to-r from-[#1a5e86] to-[#D7EDE1]">
        <div
          id="container"
          className="max-h-[90vh] w-[80%] bg-white rounded-lg drop-shadow-lg relative"
        >
          <Nav />
          <div className="overflow-y-scroll max-h-[70vh] h-fit overflow-x-hidden hide-scroll-bar object-contain">
            <Projects />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
