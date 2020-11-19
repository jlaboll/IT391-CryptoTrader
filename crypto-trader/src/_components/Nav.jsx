import React, { useState, useEffect } from 'react';
import { NavLink, Route } from 'react-router-dom';

import { accountService } from '@/_services';
import Sidebar from "../../depreciated/Sidebar";
import {CustomBar, StyledNavItem, StyledSideNav} from "../resources/Styles";
import items from "../resources/CommonRoutes";

function Nav() {
    const [user, setUser] = useState({});

    useEffect(() => {
        const subscription = accountService.user.subscribe(x => setUser(x));
        return subscription.unsubscribe;
    }, []);

    // only show nav when logged in
    if (!user) return null;

    return (
        <div>
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
                    {user.role === Role.Admin &&
                        <NavLink to="/admin" className="nav-item nav-link">Admin</NavLink>
                    }
                    <a onClick={accountService.logout} className="nav-item nav-link">Logout</a>

            <Route path="/admin" component={AdminNav} />
        </div>
    );
}

function AdminNav({ match }) {
    const { path } = match;

    return (
        <nav className="admin-nav navbar navbar-expand navbar-light">
            <div className="navbar-nav">
                <NavLink to={`${path}/users`} className="nav-item nav-link">Users</NavLink>
            </div>
        </nav>
    );
}

const css = {
    alignSelf: 'flex-end',
    justifySelf: 'center',
    marginBottom: 5,
    fontSize: '50%',
    background: '#6e2629',
    color: '#e0d9d9',
    borderColor: 'transparent'
}

class SideNav extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            activePath: props.location.pathname,
            items: items
        }
    }

    onItemClick = (path) => {
        this.setState({activePath: path}); /* Sets activePath which causes rerender which causes CSS to change */
    }


    render() {
        const {items, activePath} = this.state;
        return (
            <StyledSideNav>
                {
                    items.map((item) => {
                        return (
                            <NavItem path={item.path}
                                     name={item.name}
                                     as={item.as}
                                     id={item.id}
                                     onItemClick={this.onItemClick}
                                     active={item.path === activePath}
                                     key={item.key}/>
                        )
                    })
                }
                <Container style={{height: '100%'}}>
                    <SpecialButton/>
                </Container>
            </StyledSideNav>
        );
    }

}

class SpecialButton extends React.Component {
    constructor(props) {
        super(props);
        this.state = {width: 0, height: 0};
        this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
    }

    componentDidMount() {
        this.updateWindowDimensions();
        window.addEventListener('resize', this.updateWindowDimensions);
    }

    componentWillUnmount() {
        window.removeEventListener('resize', this.updateWindowDimensions);
    }

    updateWindowDimensions() {
        this.setState({width: window.innerWidth, height: window.innerHeight});
    }

    render() {
        const width = this.state.width;
        if (width < 768) {
            return <Button
                style={css}
                shaded
                label="Close"
                onClick={event => document.getElementById('navbar-collapse').click(function () {
                    document.getElementById('navbar-collapse').collapse('hide')
                })}
            />
        }
        return null;
    }
}


function NavItem(props){
    handleClick(() => {
        const {path, onItemClick} = props;
        onItemClick(path);
    });

    return (
    <StyledNavItem active={props.active}>
        <Link to={props.path} onClick={handleClick} id={props.id}>
            <Container style={{justifyContent: "center", display: 'flex', flexFlow: 'column nowrap'}}>
                {props.as}
                <text>{props.name}</text>
            </Container>
        </Link>
    </StyledNavItem>


)
}


const RouterSideNav = withRouter(SideNav);
export default class Sidebar extends React.Component {
    render() {
        return (
            <RouterSideNav/>
        );
    }
}

export { Nav }; 