import React from 'react'
import Window from './Window'
import "./resume.scss"
const Resume = () => {
  return (
    <div>
        <Window name={"resume"}>
            <div className="resume-window">
               <embed src="/Resume.pdf" type="" />
            </div>
        </Window>
    </div>
  )
}

export default Resume