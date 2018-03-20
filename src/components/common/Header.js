import React, {PropTypes} from 'react';
import {Link} from 'react-router-dom';
import LoadingDots from './loadingDots';
import {Navbar, Nav, NavItem, NavDropdown, MenuItem} from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

const Header = ({loading}) => {
    return(
        <Navbar className="nav-main">
            <Navbar.Header>
                <Navbar.Brand>
                    <Link to="/">Home</Link>
                </Navbar.Brand>
            </Navbar.Header>
            <Nav>
                <NavDropdown eventKey={1} title="Authors" id="authors-dropdown">
                    <LinkContainer to="/author">
                        <MenuItem eventKey={1.1}>Add Author</MenuItem>
                    </LinkContainer>
                    
                    <LinkContainer to="/authors">
                    <MenuItem eventKey={1.2}>View Authors</MenuItem>
                    </LinkContainer>
                    
                </NavDropdown>

                <NavDropdown eventKey={2} title="Courses" id="courses-dropdown">
                    <LinkContainer to="/course">
                        <MenuItem eventKey={2.1}>Add Course</MenuItem>
                    </LinkContainer>
                    <LinkContainer to="/courses">
                        <MenuItem eventKey={2.2}>View Courses</MenuItem>
                    </LinkContainer>
                </NavDropdown>

                <LinkContainer to="/about">
                    <NavItem eventKey={3}>About</NavItem>
                </LinkContainer>
            </Nav>
        </Navbar>
    );
};

Header.propTypes = {
    loading: PropTypes.bool
};

export default Header;