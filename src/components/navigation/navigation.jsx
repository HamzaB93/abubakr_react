import React from 'react';
import { LinkContainer, IndexLinkContainer } from 'react-router-bootstrap';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';

const Navigation = () => {
    return (
        <Navbar bg='light' expand='lg'>
            <LinkContainer to='/'>
                <Navbar.Brand>Abubakr Mosque</Navbar.Brand>
            </LinkContainer>
            <Navbar.Toggle aria-controls='basic-navbar-nav' />
            <Navbar.Collapse id='basic-navbar-nav'>
                <Nav className='ml-auto'>
                    <IndexLinkContainer to='/'>
                        <Nav.Link>Home</Nav.Link>
                    </IndexLinkContainer>
                    <IndexLinkContainer to='/About'>
                        <Nav.Link>About</Nav.Link>
                    </IndexLinkContainer>
                    <NavDropdown alignRight title='Dropdown' id='basic-nav-dropdown'>
                        <NavDropdown.Item href='#action/3.1'>Action</NavDropdown.Item>
                        <NavDropdown.Item href='#action/3.2'>Another action</NavDropdown.Item>
                        <NavDropdown.Item href='#action/3.3'>Something</NavDropdown.Item>
                    </NavDropdown>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}

export default Navigation;