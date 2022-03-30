import React from 'react'
import { Link } from 'react-router-dom';
import "./navbar.css"

export function NavBar() {
    const user = false;
    return (

        <div className='navbar'>
            <div className='nav-left'>
                <i className="top-icon fa-brands fa-linkedin"></i>
                <i className="top-icon fa-brands fa-facebook"></i>
                <i className=" top-icon fa-brands fa-instagram-square"></i>
                </div>
            <div className='nav-center'>
                <ul className='nav-list'>
                    <li className='nav-list-item'>
                        <Link  to='/' >Home</Link>
                    </li>
                    <li className='nav-list-item'> <Link  to='/about' >About</Link></li>
                    <li className='nav-list-item'> <Link  to='/contact' >Contact</Link></li>
                    <li className='nav-list-item'> <Link  to='/write' >Write</Link></li>

                    <li className='nav-list-item'>
                        {user && "LOGOUT"}
                    </li>
                </ul>
            </div>
            <div className='nav-right'>
                {user ? (
                <img className='nav-img' src='https://clinicforspecialchildren.org/wp-content/uploads/2016/08/avatar-placeholder.gif' 
                alt='' 
                />
                ) : (
                    <ul className='nav-list'>
                        <li className='nav-list-item'>
                        <Link to='/login'>Login</Link>
                        </li>
                        <li className='nav-list-item'>
                        <Link to='/register'>Register</Link>
                        </li>
                    </ul>
                    
                    
                )
            
            }
                <i className="searchIcon fa-solid fa-magnifying-glass"></i>
            </div>
        </div>
    )
}
