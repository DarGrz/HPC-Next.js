import * as React from "react";
import classes from "./MainNavigation.module.css";
import Image from "next/image";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";

const MainNavigation = () => {
  return (
    <Navbar bg="dark" variant="dark" expand="lg" className={classes.navbar}>
      <Container className={classes.container}>
        <Navbar.Brand href="/" className={classes.brand}>
          <Image
            src="/logo.png"
            width="60"
            height="60"
            layout="fixed"
            alt="logo"
          />
          <span>HPC</span>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link className="text-success fw-bold" href="/new-pump">
              Add new pump
            </Nav.Link>
            {/* <NavDropdown title="Admin" id="basic-nav-dropdown">
              <NavDropdown.Item href="/new-pump">Add pump</NavDropdown.Item>
            </NavDropdown> */}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default MainNavigation;
