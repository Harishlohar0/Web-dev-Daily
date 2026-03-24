import React from 'react'
import "./nav.scss"
import DateTime from './DateTime'
const Nav = () => {
    return (
        <div className='nav'>
            <div className="left">
                <div className="nav-icon">
                    <img src="./apple.png" alt="" />
                </div>
                <div className="nav-item">
                    Harish
                </div>
                <div className="nav-item">
                    File
                </div>
                <div className="nav-item">
                    Window
                </div>
                <div className="nav-item">
                    Terminal
                </div>
            </div>
            <div className="right">
                <div className="nav-icon">
                    <img src="./wifi.png" alt="" />
                </div>
                <DateTime/>
            </div>
        </div>
    )
}

export default Nav