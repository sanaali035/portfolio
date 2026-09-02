import type { Dispatch, SetStateAction } from "react";

type NavBarProps = {
  theme: "light" | "dark";
  setTheme: Dispatch<SetStateAction<"light" | "dark">>;
};

function NavBar({theme, setTheme}: NavBarProps) {
  return (
    <div className="nav-wrapper">
      <div className="menu-trigger">☰</div>

      <nav className="sidebar">
        <a href="#profile">About</a>
        <a href="#projects">Projects</a>
        <a href="#experience">Experience</a>
        <a href="#interests">Interests</a>
        <a href="#how-to">How It's Built</a>
        <button
          onClick={() =>
            setTheme(theme === "light" ? "dark" : "light")
          }
        >
          Theme
        </button>
      </nav>
    </div>
  );
}

export default NavBar;