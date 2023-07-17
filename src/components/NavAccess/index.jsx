import React from "react";
import { Nav } from "react-bootstrap";

function NavLink({ role, roles, action, children }) {
  return <Nav.Link onClick={action}>{children}</Nav.Link>;
}

export default NavLink;
