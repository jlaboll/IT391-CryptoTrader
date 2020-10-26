import React from 'react';
import {Navbar} from 'react-bootstrap';
import Sidebar from "./Sidebar";
import {CustomBar} from "../Styles";


class CryptoHeader extends React.Component {
    render() {

        return (
            <CustomBar>
                <Navbar expand='md'>
                    <Navbar.Brand href={'/'}>
                        <text className='Title'>Practice-Crypto</text>
                    </Navbar.Brand>

                        <Navbar.Toggle id='navbar-collapse' aria-controls="basic-navbar-nav"/>

                        <Navbar.Collapse id="basic-navbar-nav">
                            <Sidebar/>
                        </Navbar.Collapse>

                </Navbar>
            </CustomBar>
        )
    }
}

export const NavigationBar = () => (
    <CryptoHeader/>
)