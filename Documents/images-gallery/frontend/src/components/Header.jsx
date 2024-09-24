// import React from "react";
import { Navbar, Container } from "react-bootstrap";

const navbarStyle = {
  //JS styling
  backgroundColor: "lightblue",
  padding: "10px",
};

const Header = ({ title }) => {
  //destructuring
  return (
    <Navbar style={navbarStyle} variant="light">
      <Container>
        <Navbar.Brand href="/">{title}</Navbar.Brand>
      </Container>
    </Navbar>
  );
};
export default Header;
