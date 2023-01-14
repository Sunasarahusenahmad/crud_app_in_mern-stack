import React from "react";
import { AppBar, Toolbar, styled } from "@mui/material";
import { NavLink } from "react-router-dom";

const Header = styled(AppBar)`
  background: #E7E7E7;
`;

const Bar = styled(NavLink)`
  font-size: 17px;
  margin-left: 1rem;
  font-weight: bold;
  text-decoration : none;
`;

const Navbar = () => {
  return (
    <>
      <Header position="static">
        <Toolbar>
          <Bar to="/" style={{ fontSize: "1.4rem" }}>Crud With React</Bar>
          <Bar to="/all">All User</Bar>
          <Bar to="/add">Add User</Bar>
        </Toolbar>
      </Header>
    </>
  );
};

export default Navbar;
