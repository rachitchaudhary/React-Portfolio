import React from 'react'
import './mynavbar.style.css'
import {Navbar, Nav} from 'react-bootstrap'


const MyNavbar = () => {

    return (
        <>
            <Navbar className = 'component'>
                <ul className = 'sidebar'>
                <li><Nav.Link to="#home">Home</Nav.Link></li>
                <li><Nav.Link to="#about">About</Nav.Link></li>
                <li><Nav.Link to="#skills">Skills</Nav.Link></li>
                <li><Nav.Link to="#projects">Projects</Nav.Link></li>
                </ul>
                
            </Navbar>
        </>

    )
}

export default MyNavbar;