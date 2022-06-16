import React from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import { NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <>
            <Navbar bg="dark" variant="dark" style={{ height: "60px" }}>
                <Container>
                    <NavLink to="/" className="text-decoration-none text-light mx-3">Characters</NavLink>
                    <Nav className="me-auto">
                        <NavLink to="/favorites" className="text-decoration-none text-light">Favorites</NavLink>
                    </Nav>
                </Container>
            </Navbar>
        </>
    )
}


export default Header



 