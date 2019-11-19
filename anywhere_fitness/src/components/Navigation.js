import React from 'react';
import logo from './../images/Logo2.png';
import styled from "styled-components";


const Img = styled('img')`
width:100px;
height:100px;


`

const NavBar = styled('div')`
display:flex;
justify-content:space-between;
padding: 20px 50px;
background-color: #141c25;

`

const Nav = styled('div')`



`
const Logo = styled('div')`

`





const Navigation = () => {
  return (


    <NavBar>
        <Logo>
            <Img src={logo} alt="Logo"/>
        </Logo>
        <Nav>
            test 
            test
            test

        </Nav>
    
    
    </NavBar>
  );
};

export default Navigation;
