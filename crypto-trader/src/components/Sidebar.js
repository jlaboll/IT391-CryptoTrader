import React from 'react';
import {BsHouseFill, BsInfoCircleFill, BsPersonFill, BsGraphUp} from "react-icons/all";
import styled from "styled-components";
import {Link, withRouter} from "react-router-dom";
import {Container} from "react-bootstrap";
import {StyledNavItem, StyledSideNav} from "../Styles";


class SideNav extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            activePath: props.location.pathname,
            items: [
                {
                    path: '/',
                    name: 'Home',
                    as: <BsHouseFill/>,
                    key: 1
                },
                {
                    path: '/about',
                    name: 'About',
                    as: <BsInfoCircleFill/>,
                    key: 2
                },
                {
                    path: '/login',
                    name: 'Login',
                    as: <BsPersonFill/>,
                    key: 3
                },
                {
                    path: '/coinTest',
                    name: 'Coins',
                    as: <BsGraphUp/>,
                    key: 5
                },
                // { //Not being used, as this is an error page.
                //     path: '/NoMatch',
                //     name: 'No Match',
                //     as: <BsFillXCircleFill/>,
                //     key: 4
                // },
            ]
        }
    }

    componentDidMount() {
        const header = document.getElementById('navbar-wrapper').clientHeight;
        this.setState({
            top: header
        });
    }

    onItemClick = (path) => {
        this.setState({activePath: path}); /* Sets activePath which causes rerender which causes CSS to change */
    }

    render() {
        const {items, activePath} = this.state;
        const styles = {
            containerStyle: {
                top: this.state.top,
            }
        };
        const {containerStyle} = styles;
        return (
            <StyledSideNav style={containerStyle}>
                {
                    items.map((item) => {
                        return (
                            <NavItem path={item.path}
                                     name={item.name}
                                     as={item.as}
                                     onItemClick={this.onItemClick}
                                     active={item.path === activePath}
                                     key={item.key}/>
                        )
                    })
                }
            </StyledSideNav>
        );
    }

}



class NavItem extends React.Component {
    handleClick = () => {
        const {path, onItemClick} = this.props;
        onItemClick(path);
    }

    render() {
        const {active} = this.props;
        const as = this.props.as;
        return (
            <StyledNavItem active={active}>
                <Link to={this.props.path} onClick={this.handleClick}>
                    <Container style={{justifyContent: "center"}}>
                        {as}
                        <text>{this.props.name}</text>
                    </Container>
                </Link>
            </StyledNavItem>
        );
    }
}


const RouterSideNav = withRouter(SideNav);
export default class Sidebar extends React.Component {
    render() {
        return (
            <RouterSideNav/>
        );
    }
}
