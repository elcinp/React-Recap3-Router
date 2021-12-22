import React from "react";
import { Nav, Container, Navbar, NavDropdown } from "react-bootstrap";
import logo from "../assets/logo.png";
import { useNavigate } from "react-router-dom";

const MyNav = () => {
  const navigate = useNavigate();
  return (
    <div>
      <Navbar
        bg="light"
        expand="lg"
        onSelect={(eventKey) =>
          eventKey === "home" ? navigate("/") : navigate(`/${eventKey}`)
        }
      >
        <Container>
          <Navbar.Brand>
            <Nav.Link evetKey="home">
              <img src={logo} alt="logoClarusway" />
            </Nav.Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <NavDropdown title="Courses" id="basic-nav-dropdown">
                <NavDropdown.Item eventKey="developing">
                  FullStack-Developing
                </NavDropdown.Item>
                <NavDropdown.Item eventKey="data-science">
                  Data Science
                </NavDropdown.Item>
                <NavDropdown.Item eventKey="devops">
                  AWS-Devops
                </NavDropdown.Item>
              </NavDropdown>
              <Nav.Link eventKey="about">About</Nav.Link>
              <Nav.Link eventKey="instructors">Instructors</Nav.Link>
              <Nav.Link eventKey="contact">Contact</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default MyNav;
