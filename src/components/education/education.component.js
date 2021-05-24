import React from 'react'
import '../style/style.css'


const Education = () => {
    return (
        <div id='education'>
            <table className="resume">
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
                            <span className='degreeMarks'>85.3%</span>
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

export default Education;
