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
                                                    <h3>Goldman Sachs</h3> <h5>Associate</h5> <span className = "year">01/2022 - Present</span>
                                                    <br />
                                                    <ul>
                                                        <li> Led the automated KYCasaservicedevelopmentforclientsonboardedbyacquiredcompanies. Came up with an
                                                             innovative design</li>
                                                        <li> Designed and implemented Front-end and back-end changes for our Regulator flow to capture the clients regulators and their validity</li>
                                                        <li> Developed the Maintenance and Monitoring flow for triggering the client’s Rolling review KYC based on risk changes</li>
                                                        <li> Designed and implemented a Kafka based event service to reduce the DB load</li>
                                                        <li> Worked on several performance enhancements like DB Archival, Elastic Search and DB query optimization to tackle the latency issue when integrated with a new business line</li>
                                                        <li> Worked on several bug fixes and enhancements for our Client Onboarding services used for capturing client's KYC data based on Regulatory Rules</li>
                                                        <li> Migrated Rule implementations from legacy to a SpringBoot based Micro-services architecture under tight deadlines for the Rules As A Service product development under KYC as a Service roadmap</li>
                                                    </ul>
                                                </p>
                                                <p>
                                                    <h3>Amdocs</h3> <h5>Software Engineer Associate</h5> <span className = "year">08/2020 - 01/2022</span>
                                                    <br />
                                                    <ul>
                                                        <li> Worked as a full stack developer for a Satellite Communication client to customize the company's inventory management product for client's needs</li>
                                                        <li> Developed multiple Restful web services on top of our Telecom inventory management product to customize it for satellite communication and integrate with the client's UI</li>
                                                        <li> Developed a java application to automate data modelling process which was done using an internal tool earlier leading to reduction of developer's working time by 90%</li>
                                                        <li> Worked on several PL/SQL scripts called by different services for adding and modifying Telecom inventory in the database</li>
                                                        <li> Mentored & on-boarded freshers in the team to up-skill them to the best of engineering practices in the industry</li>
                                                    </ul>
                                                </p>
                                                <p>
                                                    <h3>Airtel</h3> <h5>Software Development Intern</h5> <span className = "year">01/2020 - 06/2020</span>
                                                    <br />
                                                    <ul>
                                                        <li> Worked on the B2B bill generation flow to change the format and added additional attributes to comply with TRAI mandate</li>
                                                        <li> Developed new SQL procedures for the attributes generation and persistence</li>
                                                        <li> Worked on React based UI for B2B bills</li>
                                                    </ul>
                                                </p>
                                                <p>
                                                    <h3>FIS Global</h3> <h5>Business Analyst Intern</h5> <span className = "year">06/2018 - 07/2018</span>
                                                    <br />
                                                    <ul>
                                                        <li>Conducted research on competitor offerings for our new products to finalize the features for MVP</li>
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
