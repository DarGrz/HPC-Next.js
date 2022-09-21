import * as React from "react";
import classes from "./MainNavigation.module.css";
import Image from "next/Image";
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
            <Nav.Link href="/about">About</Nav.Link>
            <NavDropdown title="Admin" id="basic-nav-dropdown">
              <NavDropdown.Item href="/new-pump">Add pump</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>

    // <header className={classes.header}>
    //   <div className={classes.logo}>
    //     <Image src="/logo.png" width="50" height="50" layout="fixed" />{" "}
    //     <span>HPC</span>
    //   </div>
    //   <nav>
    //     <ul>
    //       <li>
    //         <Link href="/">Strona główna</Link>
    //       </li>
    //       <li>
    //         <Link href="/about">O nas</Link>
    //       </li>
    //       <li>
    //         <Link href="/new-pump">Dodaj pompę</Link>
    //       </li>
    //     </ul>
    //   </nav>
    // </header>
  );
};

export default MainNavigation;
