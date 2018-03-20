import React, {PropTypes} from 'react';
import {Link} from 'react-router-dom';
import LoadingDots from './loadingDots';
import {Navbar, Nav, NavItem, NavDropdown, MenuItem} from 'react-bootstrap';

const Header = ({loading}) => {
    return(
        <Navbar className="nav-main">
            <Navbar.Header>
                <Navbar.Brand>
                    <Link to="/">Home</Link>
                </Navbar.Brand>
            </Navbar.Header>
            <Nav>
                <NavDropdown eventKey={1} title="Courses" id="courses-dropdown">
                    <MenuItem eventKey={1.1} href="/course">Add Course</MenuItem>
                    <MenuItem eventKey={1.2} href="/courses">View Courses</MenuItem>
                </NavDropdown>

                <NavItem eventKey={2} href="/about">About</NavItem>
            </Nav>
        </Navbar>
    );
};


Header.propTypes = {
    loading: PropTypes.bool
};

export default Header;