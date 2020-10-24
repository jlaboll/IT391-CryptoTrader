import React from 'react';
import {Navbar} from 'react-bootstrap';
import styled from 'styled-components';
import Sidebar from "./Sidebar";
import Container from "react-bootstrap/Container";

const CustomBar = styled.div`
  .container-fluid{
    padding: 0px 0px;
  }
  .navbar{
    background-color: #284B63;
    justify-content: space-between;
  }
  .Title{
    font-size: 1.8em;
    color: #CCB114;
    &:hover { color: #E7ECEF; }
  }
`;


class CryptoHeader extends React.Component {

    render() {
        return (
            <CustomBar id='navbar-wrapper'>
                <Container fluid={true}>
                    <Navbar expand="lg">
                        <Navbar.Brand href={'/'}>
                            <text className='Title'>Practice-Crypto</text>
                        </Navbar.Brand>
                        <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Sidebar/>
                        </Navbar.Collapse>
                    </Navbar>
                </Container>
            </CustomBar>
        )
    }
}

export const NavigationBar = () => (
    <CryptoHeader/>
)