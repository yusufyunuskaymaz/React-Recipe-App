import React,{useState} from "react";
import "./Navbar.style";
import Nav, { Brand ,Menu,MenuLink,Hamburger} from "./Navbar.style";
import {GiHamburgerMenu} from "react-icons/gi"
import {  useLoginContext } from "../../context/LoginContext";

const Navbar = () => {
  const {values:{user}, values:{setUser}} = useLoginContext()
  const [isOpen,setIsOpen]=useState(false)

  const user2 = false
  return (
    <Nav justify="space-between" wrap="wrap">
      <Brand to="/">
        <i>{"<Clarusway/>"}</i>
        <span>Recipe</span>
      </Brand>

      <Hamburger onClick={()=>setIsOpen(!isOpen)}>
        <GiHamburgerMenu/>
      </Hamburger>

      <Menu isOpen={isOpen} onClick={()=>setIsOpen(false)}>
        <MenuLink to="/">Home</MenuLink>
        <MenuLink to="about">About</MenuLink>
        <MenuLink to="register">Register</MenuLink>
        {!user.name && !user.password ? (
          <MenuLink to="Login">Login</MenuLink>
        ) : (
          <MenuLink onClick={() => setUser({name:"", password:""})} to="Login">Logut</MenuLink>
        )}
      </Menu>
    </Nav>
  );
};

export default Navbar;
