import React from 'react'
import "./navbar.css"

export function NavBar() {
    return (

        <div className='navbar'>
            <div className='nav-left'>
                <i className="top-icon fa-brands fa-linkedin"></i>
                <i className="top-icon fa-brands fa-facebook"></i>
                <i className=" top-icon fa-brands fa-instagram-square"></i>
                </div>
            <div className='nav-center'>
                <ul className='nav-list'>
                    <li className='nav-list-item'>Home</li>
                    <li className='nav-list-item'>Contact</li>
                    <li className='nav-list-item'>About</li>
                    <li className='nav-list-item'>Write</li>
                    <li className='nav-list-item'>Logout</li>
                </ul>
            </div>
            <div className='nav-right'>
                <img className='nav-img' src='https://clinicforspecialchildren.org/wp-content/uploads/2016/08/avatar-placeholder.gif' alt='' />
                <i className="searchIcon fa-solid fa-magnifying-glass"></i>
            </div>
        </div>
    )
}
