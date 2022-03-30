import React from 'react'
import Sidebar from '../../../components/sidebar/sidebar'
import "./settings.css"
export default function Settings() {
  return (
    <div className='settings'>
        <div className="settingsWrapper">
            <div className='settingsTitle'>
                <span className='settingsUpdateTitle'>Update account</span>
                <span className='settingsDeleteTitle'>Delete account</span>
            </div>
            <form className='settingsForm'>
                <label>Profile picture</label>
                <div className='settingsProfilePicture'>
                    <img
                    src='https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MXx8fGVufDB8fHx8&w=1000&q=80'
                    alt=''
                    />
                    <label htmlFor='fileInput'>
                    <i className="settingsProfileIcon fa-solid fa-user"></i>
                    </label>
                    <input type='file' id='fileInput' style={{display:'none'}}/>
                </div>
                <label>Username</label>
                <input type='text' placeholder='Sadiel'/>
                <label>Email</label>
                <input type='email' placeholder='name@email.com'/>
                <label>password</label>
                <input type='password'/>
                <button className='settingsSubmit'>Update</button>
            </form>
        </div>
        <Sidebar />


    </div>
  )
}
