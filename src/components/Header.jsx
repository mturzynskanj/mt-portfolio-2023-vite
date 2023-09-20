import React from 'react'
import { NavLink } from 'react-router-dom'
import logo from '../images/logo.png'


const Header = () => {
    return (
        <header className="banner">
            <div className="header-content">
                <div className="branding v-align">
                    <NavLink to='/'><img src={logo} alt="logo" /></NavLink>
                    <span className="sml-txt">201-398-8954</span>
                </div>
            </div>
        </header>
    )
}

export default Header