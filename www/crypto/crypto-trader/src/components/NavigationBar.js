import React from 'react';
import {Navbar, NavbarBrand, NavLink} from 'react-bootstrap';
import styled from 'styled-components';
import Sidebar from "./Sidebar";

const Wrapper = styled.div`
  .navbar{
    background-color: #153243;
    navbutton_background_color: #284B63;
    flex: initial;
    justify-content: space-between;
  }
  
`;
const Text = styled(NavLink)`
    font-size: 1.8em;
    color: #CCB114;
    &:hover { color: #CCB114; }
`;

class CustomHeader extends React.Component {

    render() {
        return (
            <Wrapper id='navbar-wrapper'>
                <Navbar expand="lg">
                    <NavbarBrand as="Text"><Text>Practice-Crypto</Text></NavbarBrand>
                    <div>
                        <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Sidebar/>
                        </Navbar.Collapse>
                    </div>
                </Navbar>
            </Wrapper>
        )

    }
}

export const NavigationBar = () => (
    <CustomHeader/>
)