import React from 'react'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import logo from '../../assets/icons/rachit.PNG'
import './mynavbar.style.css'


const MyNavbar = () => {

    return (
        <>
            <Navbar className = 'sidebar' className = 'component'>
                <Nav.Link href="#home">Home</Nav.Link>
                <Nav.Link href="#about">About</Nav.Link>
                <Nav.Link href="#skills">Skills</Nav.Link>
                <Nav.Link href="#projects">Projects</Nav.Link>
            </Navbar>
        </>
    )
    }

export default MyNavbar;