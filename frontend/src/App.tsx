import NavBar from "./components/NavBar";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Hero from "./components/Hero";
import HowItsBuilt from "./components/HowItsBuilt";
import Books from "./components/Books";
import './App.css';

function App() {
  return (
    <>
      <NavBar />
      <main>
        <Hero />
        <Experience />
        <Projects />
        <Books />
        <HowItsBuilt />
      </main>
    </>
  );
}

export default App;