// import React from "react";
import { Navbar } from "react-bootstrap";

const navbarStyle = {
  backgroundColor: "lightblue",
  padding: "20px"
};

const Header = ({ title }) => {
  //destructuring
  return (
    <Navbar style={navbarStyle} variant="light">
      <Navbar.Brand href="/">{title}</Navbar.Brand>
    </Navbar>
  );
};
export default Header;
