import React, {useState, useEffect, useRef} from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom'

function Navbar() {
    return (
        <nav className='navbar-container'>
            <Link to='/FrontEnd-DSProject/' className='site-title'>Idealimpact</Link>
            <ul>
                <CustomLink to='/FrontEnd-DSProject/'>Home</CustomLink>
                <CustomLink to='/FrontEnd-DSProject/Stats/'>Stats</CustomLink>
            </ul>
        </nav>
    )
}

function CustomLink({to, children, ...props}){
    const path = window.location.pathname

    return (
        <li className={path === to ? 'active' : ""}>
            <Link to={to} {...props}>
                {children}
            </Link>
        </li>
    )
}

export default Navbar