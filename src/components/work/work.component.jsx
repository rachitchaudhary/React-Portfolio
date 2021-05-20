import React from 'react'
import '../style/style.css'


const Work = () => {
    return (
        <div id='work'>
            <center className='heading'>About</center>
            <table className="resume">
                <tr>
                    <td className="lcol">
                        <p><br /><br />Work Experience</p>
                    </td>
                    <td className="rcol">
                        <br />
                        <p>Amdocs/ Software Engineering Associate
          <span className='year'>08/2020 - Present</span>
                            <br />
                            <span className='degreeName'>
                                <ul>
                                    <li>Working as a Backend Developer in Product Customization Team</li>
                                    <li>Designed and implemented multiple Restful Web Services</li>
                                    <li>Developed a Java Application that automates Metadata modelling hence reducing Developer's time by 91%</li>
                                    <li>Wrote PL/SQL scripts for the product</li>
                                    <li>Tech Stack: Java, SpringBoot, Oracle DB, PL/SQL, Maven, Perforce</li>
                                </ul>
                            </span>
                        </p>
                        <p>Airtel/ Software Developer Intern
          <span className='year'>01/2020 - 06/2020</span>
                            <br />
                            <span className='degreeName'>
                                <ul>
                                    <li>Worked as a Software Development Intern in a project to revamp company's billing system</li>
                                    <li>Tech Stack: Java, SQL</li>
                                </ul>
                            </span>
                        </p>
                        <p>FIS Global/ Business analyst Intern
          <span className='year'>06/2018 - 07/2018</span>
                            <br />
                            <span className='degreeName'>
                                <ul>
                                    <li>Conducted a research on the products offered by competitors viz-a-viz company's newly launched products and created a comparitive analysis</li>
                                </ul>

                            </span>
                        </p>
                        <hr />
                    </td>
                </tr>
                <tr>
                    <td className ='lcol'>Education</td>
                    <td className = 'rcol'>
                        <p>Thapar Institue Of Engineering and Technology, Patiala
          <span className='year'>2016-2020</span>
                            <br />
                            <span className='degreeName'>B.E. in Electronics and Computers Engineering</span>
                            <span className='degreeMarks'>CGPA: 7.05</span>
                        </p>
                        <p>V.H.R.S.S.S., Patiala
            <span className='year'>2016</span>
                            <br />
                            <span className='degreeName'>class XII from P.S.E.B.</span>
                            <span className='degreeMarks'>Percentage: 85.3%</span>
                        </p>
                        <p>B.D.P.S., Patiala
              <span className='year'>2014</span>
                            <br />
                            <span className='degreeName'>class X from C.B.S.E.</span>
                            <span className='degreeMarks'>CGPA: 8.8</span>
                        </p>
                        <hr />
                    </td>
                </tr>
            </table>
        </div>
    )
}

export default Work;
