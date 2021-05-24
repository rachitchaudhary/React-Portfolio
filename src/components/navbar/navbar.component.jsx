import React, { useEffect, useState } from 'react'
import './navbar.style.css'
import { Navbar, Nav } from 'react-bootstrap'
import $ from 'jquery';

const MyNavbar = () => {

    const handleClick = (e) => {
        setIsActive(e.target.id);
    }

    const [isActive, setIsActive] = useState("homeNav");

    useEffect(() => {
        window.onscroll = () => {

            var Scroll = $(window).scrollTop() + 1 + $(window).height()/2,
            homeOffset = $('#home').offset().top,
			workOffSet = $('#work').offset().top, 
            educationOffset = $('#education').offset().top,
            projectsOffset = $('#projects').offset().top,
            skillOffset = $('#skills').offset().top; 
			
            console.log(Scroll, workOffSet)
            if(Scroll >= skillOffset){ 
                setIsActive("skillsNav");
            }  else if(Scroll >= projectsOffset){ 
                setIsActive("projectsNav");
            } else if(Scroll >= educationOffset){ 
                setIsActive("educationNav");
            }else if (Scroll >= workOffSet) { 
                setIsActive("workNav");
            }else if (Scroll < workOffSet){
                setIsActive("homeNav");
            }
        }
    }, []);


    return (
        <div>
            <Navbar fixed='top' className='component'>
                <ul className='navContainer'>
                    <li>
                        <Nav.Link href="#home" id="homeNav" onClick={handleClick} className={isActive === "homeNav" ? "activeLink" : null}>Home</Nav.Link>
                    </li>
                    <li>
                        <Nav.Link href="#work" id="workNav" onClick={handleClick} className={isActive === "workNav" ? "activeLink" : null}>Work Experience</Nav.Link>
                    </li>
                    <li>
                        <Nav.Link href="#education" id="educationNav" onClick={handleClick} className={isActive === "educationNav" ? "activeLink" : null}>Education</Nav.Link>
                    </li>
                    <li>
                        <Nav.Link href="#projects" id="projectsNav" onClick={handleClick} className={isActive === "projectsNav" ? "activeLink" : null}>Projects</Nav.Link>
                    </li>
                    <li>
                        <Nav.Link href="#skills" id="skillsNav" onClick={handleClick} className={isActive === "skillsNav" ? "activeLink" : null}>Skills</Nav.Link>
                    </li>
                </ul>
            </Navbar>
        </div>
    )
}

export default MyNavbar;
