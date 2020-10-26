import React from 'react';
import {Navbar} from 'react-bootstrap';
import Sidebar from "./Sidebar";
import Container from "react-bootstrap/Container";
import {CustomBar} from "../Styles";
import Login from "./Login";


class CryptoHeader extends React.Component {
    render() {

        return (
            <CustomBar id='navbar-wrapper'>
                <Container fluid={true}>
                    <Navbar expand='md'>
                        <Navbar.Brand href={'/'}>
                            <text className='Title'>Practice-Crypto</text>
                        </Navbar.Brand>
                        <Login/>
                        <Navbar.Toggle id='navbar-collapse' aria-controls="basic-navbar-nav"/>
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