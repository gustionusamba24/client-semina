import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import NavLink from "../NavAccess";
import { useNavigate } from "react-router";

function SNavbar() {
  const navigate = useNavigate();
  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="#home">Dashboard</Navbar.Brand>
        <Nav className="me-auto">
          <NavLink action={() => navigate("/")}>Home</NavLink>
          <NavLink action={() => navigate("/categories")}>
            Categories
          </NavLink>
          <NavLink action={() => navigate("/talents")}>
            Talents
          </NavLink>
          <NavLink action={() => navigate("/events")}>Events</NavLink>
          <NavLink action={() => navigate("/participant")}>
            Participant
          </NavLink>
          <NavLink action={() => navigate("/transactions")}>
            Transaction
          </NavLink>
        </Nav>
      </Container>
    </Navbar>
  );
}

export default SNavbar;
