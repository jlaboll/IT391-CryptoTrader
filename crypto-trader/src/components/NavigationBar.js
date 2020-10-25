import React from 'react';
import {Navbar} from 'react-bootstrap';
import Sidebar from "./Sidebar";
import Container from "react-bootstrap/Container";
import {CustomBar} from "../Styles";
import {userContext} from "../context_based/userContext";
import {UserLoggedIn} from "../context_based/UserLoggedIn"


class CryptoHeader extends React.Component {
    constructor(props) {
        super(props);
        this.state ={
            user: {}
        }
        this.logout = this.logout.bind(this);
    }

    logout(){
        this.setState({user: {}})
    }

    componentDidMount() {
        //get and set logged in user to state
    }

    render() {
        const value = {
            user: this.state.user,
            logoutUser: this.logout
        }
        return (
            <CustomBar id='navbar-wrapper'>
                <Container fluid={true}>
                    <Navbar expand="lg">
                        <Navbar.Brand href={'/'}>
                            <text className='Title'>Practice-Crypto</text>
                        </Navbar.Brand>
                        <userContext.Provider value={value}>
                            <UserLoggedIn/>
                        </userContext.Provider>
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