function NavBar() {
  const links = [
    { href: "#profile", label: "About" },
    { href: "#projects", label: "Projects" },
    { href: "#experience", label: "Experience" },
    { href: "#books", label: "Books" },
    { href: "#how-to", label: "How It's Built" },
  ];

  return (
    <nav>
      {links.map((link) => (
        <a key={link.href} href={link.href}>
          {link.label}
        </a>
      ))}
    </nav>
  );
}

export default NavBar;