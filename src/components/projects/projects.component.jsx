import React from 'react'
import '../style/style.css'

const Projects = () => {
    return (
        <div id='projects'>
            <table className='resume'>
                <td className='lcol'>Projects</td>
                <td className = 'rcol'>
                    <p>Underwater Surveillance System
          <span className='year'>01/2019 - 12/2019</span>
                        <br />
                        <span className='degreeName'>Developed an underwater drone that will be used for terrain mapping and surveillance
          </span>
                    </p>
                    <p>Facial Recognition
          <span className='year'>03/2019 - 04/2019</span>
                        <br />
                        <span className='degreeName'>Prepared a project using KNN algorithm to predict the names of the people in an image
          </span>
                    </p>
                    <p>Road Transport Optimization
          <span className='year'>08/2018 - 12/2018</span>
                        <br />
                        <span className='degreeName'>Developed a project using Dijkastra algorithm to find the optimal route between two cities of Punjab
          </span>
                    </p>

                </td>
            </table>
        </div>
    )
}

export default Projects
