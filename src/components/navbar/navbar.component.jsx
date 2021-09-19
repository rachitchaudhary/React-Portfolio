import React from 'react'
import './navbar.style.css'
import { Navbar, Nav } from 'react-bootstrap'

const MyNavbar = () => {

    // const handleClick = (e) => {
    //     setIsActive(e.target.id);
    // }

    // const [isActive, setIsActive] = useState("homeNav");

    // useEffect(() => {
    //     window.onscroll = () => {

    //         var Scroll = $(window).scrollTop() + 1 + $(window).height()/2,
	// 		educationOffset = $('#education').offset().top,
    //         skillOffset = $('#skills').offset().top; 
    //         if(Scroll >= skillOffset){ 
    //             setIsActive("skillsNav");
    //         }
    //         else if(Scroll >= educationOffset){ 
    //             setIsActive("educationNav");
    //         }
    //         else if (Scroll < skillOffset){
    //             setIsActive("homeNav");
    //         }
    //     }
    // }, []);


    return (
        <div className = 'sidebar'>
            <h1>Rachit Chaudhary</h1>
                <p style={{color:'black',fontWeight:'bold'}} className="gmail"> rachit5399@gmail.com </p>
                <br/><br/><br/>
            <Navbar className = 'sidebar-nav' style = {{paddingLeft : "60px"}}>
                <ul>
                    <li className="links">
                        <Nav.Link href="#home" id="homeNav">Home</Nav.Link>
                    </li>
                    <li className="links">
                        <Nav.Link href="#about" id="aboutNav">About</Nav.Link>
                    </li>
                    <li className="links">
                        <Nav.Link href="#skills" id="skillsNav">Skills</Nav.Link>
                    </li>
                </ul>
            </Navbar>
                <div className="flip-card-back">
                    <ul className="sidebar-nav">
                        <li className="sidebar-nav-icons"><a href="https://www.linkedin.com/in/rachit-chaudhary-59b9ab8b/" rel="opener noreferrer" target="_blank" class="fa fas fa-linkedin fa-lg"></a></li>
                        <li className="sidebar-nav-icons"> <a href="mailto:rachit5399@gmail.com" rel="opener noreferrer" target="_blank" class="fa fas fa-envelope fa-lg"></a></li>
                    </ul>
                </div>
        </div>
    )
}

export default MyNavbar;
