import React from 'react';
import {Form, FormControl, Navbar, NavbarBrand} from 'react-bootstrap';
import styled from 'styled-components';
import Sidebar from "./Sidebar";

const Wrapper = styled.div`
  
  .navbar{
    background-color: #222;
    display: flex;
    justify-content: space-around;
  }
 .navbar-light, .navbar-brand{
    font-size: 200%;
    color: #CCB114;
    &:hover { color: white; }
  }
`;
const Front = styled.div`
//Nothing
`;
const Middle = styled.div`
//Nothing
`;
const Last = styled.div`
  display: flex;
  justify-content: flex-end;
`;
const InputBar = styled(Form)`
   font-size: 12px;
   padding: 2px 5px;
`;
export const NavigationBar = () => (
    <Wrapper>
        <Navbar expand="lg">
            <Front>
                <NavbarBrand href="/">Practice-Crypto</NavbarBrand>
            </Front>
            <Middle/>
            <Last>
                <InputBar>
                    <FormControl type="text" placeholder="Username" className=""/>
                </InputBar>
                <InputBar>
                    <FormControl type="text" placeholder="Password" className=""/>
                </InputBar>
                <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                <Navbar.Collapse id="basic-navbar-nav">
                    <Sidebar/>
                </Navbar.Collapse>
            </Last>
        </Navbar>
    </Wrapper>
)