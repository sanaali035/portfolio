import NavBar from "./components/NavBar";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Hero from "./components/Hero";
import HowItsBuilt from "./components/HowItsBuilt";
import Books from "./components/Interests";
import './App.css';
import { useEffect, useState } from "react";


function App() {
  const [theme, setTheme] = useState<"light" | "dark">(() => {
    const savedTheme = localStorage.getItem("theme");

    if (savedTheme === "dark" || savedTheme === "light") {
      return savedTheme;
    }
    return "light";
  })

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <>
      <NavBar theme={theme} setTheme={setTheme} />

      <main>
        <Hero />
        <Projects />
        <Experience />
        <Books />
        <HowItsBuilt />
      </main>
    </>
  );
}


export default App;