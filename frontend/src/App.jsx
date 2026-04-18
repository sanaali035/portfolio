import NavBar from "./components/NavBar";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import About from "./components/About";
import Howto from "./components/Howto";
import Books from "./components/Books";

function App() {
  return (
    <>
      <NavBar />
      <main>
        <About />
        <Experience />
        <Projects />
        <Books />
        <Howto />
      </main>
    </>
  );
}

export default App;