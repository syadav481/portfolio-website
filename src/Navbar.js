import React from "react";
import { Link, useMatch, useResolvedPath } from "react-router-dom";
const Navbar = () => {
  return (
    <nav className="nav">
      <Link to="/" className="Site-Title">
        Site Name
      </Link>
      <ul>
        <CustomLink to="/Projects">Projects</CustomLink>
        <CustomLink to="/About">About</CustomLink>
      </ul>
    </nav>
  );
};
function CustomLink({ to, children, ...props }) {
  const resolvedPath = useResolvedPath(to);
  // end: true ensures the entire path is a complete match and doesn't allow for partial matches.
  const isActive = useMatch({ path: resolvedPath.pathname, end: true });
  return (
    <li className={isActive ? "active" : ""}>
      <Link to={to} {...props}>
        {children}
      </Link>
    </li>
  );
}
export default Navbar;
