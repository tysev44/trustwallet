import React from 'react'
import { FaArrowRight } from 'react-icons/fa6'
import tlogo from '../img/tlogo.png'
import { Link } from 'react-router-dom'

function Head() {

    const menuClick =()=>{
        const menu_icon = document.querySelector(".menu-icon")
        menu_icon.classList.toggle("open");
        const menu_dropdown = document.querySelector(".menu_dropDown")
        menu_dropdown.classList.toggle("dropDown");
    }

  return (
    <div className='head_container'>
        <div className='head' >

        <img src={tlogo} className='headImg' alt='' />

        <div className='head_links' >
            <p>Wallet</p>
            <p>Features</p>
            <p>Build</p>
            <p>Support</p>
            <p>About</p>
        </div>

        <Link to='/login' className='head_logbtn'>
            <p>Login</p>
        </Link>

        <div onClick={menuClick} className="menu-icon">
            <span></span>
            <span></span>
            <span></span>
        </div>

        <div className='menu_dropDown' >
            <div className='dropdown_slide'>
                <p>Wallet</p>
                <FaArrowRight />
            </div>
            <div className='dropdown_slide'>
                <p>Features</p>
                <FaArrowRight />
            </div>
            <div className='dropdown_slide'>
                <p>Build</p>
                <FaArrowRight />
            </div>
            <div className='dropdown_slide'>
                <p>Support</p>
                <FaArrowRight />
            </div>
            <div className='dropdown_slide'>
                <p>About</p>
                <FaArrowRight />
            </div>

            <Link to='/login' className='menu_mobile_logbtn'>
                <p>Login</p>
            </Link>
        </div>
        </div>
    </div>
  )
}

export default Head