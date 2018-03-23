import React, {PropTypes} from 'react';
import {Link} from 'react-router-dom';
import {Navbar, Nav, NavItem, NavDropdown, MenuItem} from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

const Header = ({loading}) => {
    return(
        <Navbar className="nav-main">
            <Navbar.Header>
                <Navbar.Brand>
                    <Link to="/">Home</Link>
                </Navbar.Brand>
                <Navbar.Toggle />
            </Navbar.Header>
            <Navbar.Collapse>
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
                        <MenuItem eventKey={2.1}>Add course</MenuItem>
                    </LinkContainer>
                    <LinkContainer to="/courses">
                        <MenuItem eventKey={2.2}>View courses</MenuItem>
                    </LinkContainer>
                </NavDropdown>

                 <NavDropdown eventKey={3} title="Categories" id="categories-dropdown">
                    <LinkContainer to="/category">
                        <MenuItem eventKey={3.1}>Add category</MenuItem>
                    </LinkContainer>
                    <LinkContainer to="/categories">
                        <MenuItem eventKey={3.2}>View categories</MenuItem>
                    </LinkContainer>
                </NavDropdown>

                <LinkContainer to="/about">
                    <NavItem eventKey={4}>About</NavItem>
                </LinkContainer>
            </Navbar.Collapse>
        </Navbar>
    );
};

Header.propTypes = {
    loading: PropTypes.bool
};

export default Header;