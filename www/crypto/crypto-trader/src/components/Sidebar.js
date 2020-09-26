import React from 'react';
import {BsFillXCircleFill, BsHouseFill, BsInfoCircleFill, BsPerson} from "react-icons/all";
import styled from "styled-components";
import {Link, withRouter} from "react-router-dom";


/* This defines the actual bar going down the screen */
const StyledSideNav = styled.div`
  position: fixed;     /* Fixed Sidebar (stay in place on scroll and position relative to viewport) */
  bottom: 0;
  right: 0;
  height: 100%;
  width: 75px;     /* Set the width of the sidebar */
  z-index: 1;      /* Stay on top of everything */ 
  background-color: #284B63; /* Black */
  overflow-x: hidden;     /* Disable horizontal scroll */
  padding-top: 10px;
`;

class SideNav extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            activePath: props.location.pathname,
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
        const {activePath} = this.state;
        const styles = {
            containerStyle: {
                top: this.state.top,
            }
        };
        const {containerStyle} = styles;
        return (
            <StyledSideNav style={containerStyle}>

                <IconHome path='/' onItemClick={this.onItemClick} active={'/' === activePath}/>
                <IconLogin path='/login' onItemClick={this.onItemClick} active={'/login' === activePath}/>
                <IconAbout path='/about' onItemClick={this.onItemClick} active={'/about' === activePath}/>
                <IconNoMatch path='/no-match' onItemClick={this.onItemClick} active={'/no-match' === activePath}/>


            </StyledSideNav>
        );
    }

}

const StyledNavItem = styled.div`
  height: 70px;
  width: 75px; /* width must be same size as NavBar to center */
  text-align: center; /* Aligns <a> inside of NavIcon div */
  margin-bottom: 0;   /* Puts space between NavItems */
  a {
    font-size: 2.7em;
    color: ${(props) => props.active ? "white" : "#9FFFCB"};
    :hover {
      opacity: 0.7;
      text-decoration: none; /* Gets rid of underlining of icons */
    }  
  }
`;


class IconHome extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            activePath: this.props.active
        }
    }

    handleClick = () => {
        const {path, onItemClick} = this.props;
        onItemClick(path);
    }

    render() {
        const {active} = this.props;

        return (<StyledNavItem active={active}>
                <Link to={this.props.path} onClick={this.handleClick}>
                    <BsHouseFill/>
                </Link>
            </StyledNavItem>
        );
    }
}

class IconAbout extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            activePath: this.props.active
        }
    }

    handleClick = () => {
        const {path, onItemClick} = this.props;
        onItemClick(path);
    }

    render() {
        const {active} = this.props;

        return (<StyledNavItem active={active}>
                <Link to={this.props.path} onClick={this.handleClick}>
                    <BsInfoCircleFill/>
                </Link>
            </StyledNavItem>
        );
    }
}

class IconLogin extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            activePath: this.props.active
        }
    }

    handleClick = () => {
        const {path, onItemClick} = this.props;
        onItemClick(path);
    }

    render() {
        const {active} = this.props;

        return (<StyledNavItem active={active}>
                <Link to={this.props.path} onClick={this.handleClick}>
                    <BsPerson/>
                </Link>
            </StyledNavItem>
        );
    }
}

class IconNoMatch extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            activePath: this.props.active
        }
    }

    handleClick = () => {
        const {path, onItemClick} = this.props;
        onItemClick(path);
    }

    render() {
        const {active} = this.props;

        return (<StyledNavItem active={active}>
                <Link to={this.props.path} onClick={this.handleClick}>
                    <BsFillXCircleFill/>
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
