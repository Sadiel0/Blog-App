import React from 'react'
import "./sidebar.css"

export default function Sidebar() {
  return (
    <div className='sidebar'>
        <div className='sidebarItem'>
            <span className='sidebarTitle'>About me</span>
            <img src='https://new.visitfinland.com/dam/jcr:10100117-5154-4a6d-afb7-56502939f9e3/___Finland_Aurora_dome_Jeris_Antti_Pietik%C3%A4inen.12422788202013340987.jpg' style={{width:"100%"}}/>
            <p>DFJNASDJFNALSJDFN;ASLJDFNA;SLDJFN;ASJFN;AJFN;AJSN</p>
        </div>
        <div className='sidebarItem'>
            <span className='sidebarTitle'>CATEGORIES</span>
            <ul className='sidebarList'>
                <li className='sidebarListItem'>
                    Life
                </li>
                <li className='sidebarListItem'>
                    Sports
                </li>
                <li className='sidebarListItem'>
                    Style
                </li>
                <li className='sidebarListItem'>
                    Tech
                </li>

            </ul>
            <div className='sidebarItem'>
                <span className='sidebarTitle'>Follow</span>
                <div className='sidebarSocial'>
                <i className="sidebarIcon fa-brands fa-linkedin"></i>
                <i className="sidebarIcon fa-brands fa-facebook"></i>
                <i className=" sidebarIcon fa-brands fa-instagram-square"></i>
                </div>
            </div>
        </div>
    </div>
  )
}
