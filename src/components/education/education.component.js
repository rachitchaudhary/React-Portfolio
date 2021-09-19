import React, { Component } from 'react';
import classes from './education.style.css';
import ScrollAnimation from 'react-animate-on-scroll';
import "animate.css/animate.min.css";
import { FaSchool } from 'react-icons/fa';

class Education extends Component {
    render() {
        return (
                <div className={classes.box} id="about">
                    <ScrollAnimation offset="0" animateIn="fadeInLeft" duration='2' animateOnce="true" initiallyVisible ={true}>
                     <span  className={classes.head}>MY JOURNEY</span>
                    <section className={classes.container}>
                        <div className={classes.container_content}>
                            <div className={classes.row}>
                                <div className={classes.row_md_12}>
                                    <div className={classes.timeline_centered}>
                                        <ScrollAnimation offset="0" animateIn="fadeInLeft" duration='2.4' animateOnce="true" initiallyVisible ={true}>
                                            <article className={classes.timeline_entry}>
                                                <div className={`${classes.timeline_icon} ${classes.timeline_icon_2}`} >
                                                    <FaSchool />     
                                                </div>
                                                <div className={classes.label}>
                                                <h2 >Work Experience</h2>
                                                <p>
                                                    <h3>Amdocs</h3> <h5>Software Engineer Associate</h5> <span className = "year">08/2020 - Present</span>
                                                    <br />
                                                    <ul>
                                                        <li>Working as a Back-end Engineer in Inventory Management Software Team</li>
                                                        <li>Worked on multiple REST APIs of the product</li>
                                                        <li>Developed a solution to generate unique sequences as well as re-use the deleted
sequences for different combinations of attribute values of object</li>
                                                        <li>Worked on a Java Application that automates Metadata modelling leading to
reduction of Developer's working time by 90%</li>
                                                        <li>Tech Stack: Java, Spring Boot, PL/SQL, Maven, Perforce</li>
                                                    </ul>
                                                </p>
                                                <p>
                                                    <h3>Airtel</h3> <h5>Software Development Intern</h5> <span className = "year">01/2020 - 06/2020</span>
                                                    <br />
                                                    <ul>
                                                        <li>Worked as a Software Development Intern in a project to revamp company's billing
system</li>
                                                        <li>Tech Stack: Java, SQL</li>
                                                    </ul>
                                                </p>
                                                <p>
                                                    <h3>FIS Global</h3> <h5>Business Analyst Intern</h5> <span className = "year">06/2018 - 07/2018</span>
                                                    <br />
                                                    <ul>
                                                        <li>Conducted a research on the products offered by competitors viz-a-viz company’s
newly launched products and created a comparative analysis</li>
                                                    </ul>
                                                </p>
                                                </div>
                                            </article>
                                        </ScrollAnimation>
                                        <ScrollAnimation offset="0" animateIn="fadeInLeft" duration='2.4' animateOnce="true" initiallyVisible ={true}>
                                            <article className={classes.timeline_entry}>
                                                <div className={`${classes.timeline_icon} ${classes.timeline_icon_2}`} >
                                                    <FaSchool />     
                                                </div>
                                                <div className={classes.label}>
                                                <h2 >Education</h2>
                                                <p>
                                                    <h5>Thapar Institue Of Engineering and Technology, Patiala</h5> <span className = "year">2016-2020</span>
                                                    <br />
                                                    <span>B.E. in Electronics and Computers Engineering</span> <span className = "year">CGPA: 7.05</span>
                                                </p>
                                                <p>
                                                    <h5>V.H.R.S.S.S., Patiala</h5> <span className = "year">2016</span>
                                                    <br />
                                                    <span>class XII from P.S.E.B</span> <span className = "year">85.3%</span>
                                                </p>
                                                <p>
                                                    <h5>B.D.P.S., Patiala</h5> <span className = "year">2014</span>
                                                    <br />
                                                    <span>class X from C.B.S.E.</span> <span className = "year">CGPA: 8.8</span>
                                                </p>
                                                </div>
                                            </article>
                                        </ScrollAnimation>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    </ScrollAnimation>
                </div>
     
        )
    }
}

export default Education;
