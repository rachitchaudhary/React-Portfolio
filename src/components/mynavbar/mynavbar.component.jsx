import React from 'react'
import './mynavbar.style.css'
import {Navbar, Nav} from 'react-bootstrap'

  

const MyNavbar = () => {

    return (
        <>
            <Navbar className = 'component'>
                <ul className = 'sidebar'>
                <li><Nav.Link href="#home">Home</Nav.Link></li>
                <li><Nav.Link href="#about">About</Nav.Link></li>
                <li><Nav.Link href="#skills">Skills</Nav.Link></li>
                <li><Nav.Link href="#projects">Projects</Nav.Link></li>
                </ul>
                
            </Navbar>
        </>

    )
}

export default MyNavbar;