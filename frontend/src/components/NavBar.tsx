function NavBar() {
  return (
    <div className="nav-wrapper">
      <div className="menu-trigger">☰</div>

      <nav className="sidebar">
        <a href="#profile">About</a>
        <a href="#projects">Projects</a>
        <a href="#experience">Experience</a>
        <a href="#books">Books</a>
        <a href="#how-to">How It's Built</a>
      </nav>
    </div>
  );
}

export default NavBar;