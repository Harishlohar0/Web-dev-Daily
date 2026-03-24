import React from 'react'
import "./dock.scss"
import { useWindow } from './Context/WindowContext'
const Dock = () => {
    const { toggleWindow } = useWindow();
    return (
        <footer className="dock">
            <div onClick={() => toggleWindow("github")} className="icon github"><img src="./git.jpg" alt="" /></div>
            <div onClick={() => toggleWindow("cli")} className="icon cli"><img src="./cli.png" alt="" /></div>
            <a href='mailto:harishlohar77777@gmail.com' target="_blank"
                rel="noopener noreferrer" className="icon mail"><img src="./mail.png" alt="" /></a>
            <a href='https://calendar.google.com/calendar/u/0/r' target="_blank"
                rel="noopener noreferrer" className="icon calander"><img src="./calander.png" alt="" /></a>
            <div onClick={() => toggleWindow("notes")} className="icon notes"><img src="./notes.png" alt="" /></div>
            <div onClick={() => toggleWindow("resume")} className="icon pdf"><img src="./pdf.png" alt="" /></div>
            <div onClick={() => toggleWindow("spotify")} className="icon sspotify"><img src="./spotify.jpg" alt="" /></div>
            <a href="https://www.linkedin.com/in/harish-lohar-311879323/" target="_blank"
                rel="noopener noreferrer" className="icon link"><img src="./link.png" alt="" /></a>

        </footer>
    )
}

export default Dock