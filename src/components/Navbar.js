import React from "react";
import { NavLink } from "react-router-dom"
import { Button } from '@mui/material';

function Navbar() {
    const resume = "https://drive.google.com/file/d/1F6VbCxG_aLgt4CQ41s6QWQ-MO30yodKM/view?usp=sharing"
    return (
        <div className="navbar">
            <div className="nav-title">
                <NavLink className="nav-link logo-name" to="/" > Keshav Tulsyan</NavLink>
                <NavLink className="nav-link" to='/'>Home</NavLink>
                <NavLink className="nav-link" to='projects' >Projects</NavLink>
                <NavLink className="nav-link" to='work'>Work</NavLink>
                <Button href={resume} class="resume">Resume</Button>
            </div>
        </div>
    )
}

export default Navbar