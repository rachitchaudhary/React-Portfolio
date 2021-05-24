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
                        <span>Amdocs/ Software Engineering Associate
          <span className='year'>08/2020 - Present</span>
                            <br />
                            <span className='degreeName'>
                                <ul>
                                    <li>Working as a Backend Developer in Product Customization Team</li>
                                    <li>Designed and implemented multiple Restful Web Services</li>
                                    <li>Contributed in development of a Java Application that automates Metadata modelling leading to reduction of Developer's working time by 90%</li>
                                    <li>Wrote PL/SQL scripts for the product</li>
                                    <li>Tech Stack: Java, SpringBoot, Oracle DB, PL/SQL, Maven, Perforce</li>
                                </ul>
                            </span>
                        </span>
                        <span>Airtel/ Software Developer Intern
          <span className='year'>01/2020 - 06/2020</span>
                            <br />
                            <span className='degreeName'>
                                <ul>
                                    <li>Worked as a Software Development Intern in a project to revamp company's billing system</li>
                                    <li>Tech Stack: Java, SQL</li>
                                </ul>
                            </span>
                        </span>
                        <span>FIS Global/ Business analyst Intern
          <span className='year'>06/2018 - 07/2018</span>
                            <br />
                            <span className='degreeName'>
                                <ul>
                                    <li>Conducted a research on the products offered by competitors viz-a-viz company's newly launched products and created a comparitive analysis</li>
                                </ul>

                            </span>
                        </span>
                        <hr />
                    </td>
                </tr>
            </table>
        </div>
    )
}

export default Work;
