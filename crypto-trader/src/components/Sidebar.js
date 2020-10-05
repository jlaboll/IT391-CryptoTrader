import React from 'react';
import {BsHouseFill, BsInfoCircleFill, BsPersonFill} from "react-icons/all";
import styled from "styled-components";
import {Link, withRouter} from "react-router-dom";
import {Container} from "react-bootstrap";


/* This defines the actual bar going down the screen */
const StyledSideNav = styled.div`
  position: fixed;     /* Fixed Sidebar (stay in place on scroll and position relative to viewport) */
  bottom: 0;
  right: 0;
  height: 100%;
  width: 75px;     /* Set the width of the sidebar */
  z-index: 1;      /* Stay on top of everything */ 
  background-color: #86BBBD;
  overflow-x: hidden;     /* Disable horizontal scroll */
  padding-top: 10px;
`;

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

const StyledNavItem = styled.div`
  height: 70px;
  width: 75px; /* width must be same size as NavBar to center */
  margin-bottom: 0;   /* Puts space between NavItems */
  a{
    font-size: 2.7em;
    color: ${(props) => props.active ? "#E7ECEF" : "#284B63"};
    :hover {
      text-decoration: none;
      opacity: 0.7; /* Gets rid of underlining of icons */
    }  
    text{
      font-size: small;
    }
  }
  
`;

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
