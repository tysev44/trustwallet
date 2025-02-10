import React from 'react'
import {  FaImages, FaLocationDot } from 'react-icons/fa6'

function UserSlice() {
  return (
    <div className='userSlice' >
      <FaImages className='userAvatar' size={40} color='grey' />
      
      <div className='userSlice_body' >
        <div className='userSlice_body_writeups'  >
          <p>user name</p>
          <FaLocationDot size={10} color='grey' />
        </div>

        <div className='userSlice_body_writeups'>
          <p>Order</p>
          <div>
            <div className='dot'></div>
            <small>timestamp</small>
          </div>
        </div>

        <div className='userSlice_body_writeups'>
          <p>message</p>
          <div>
            <div className='dot'></div>
            <small>timestamp</small>
          </div>
        </div>

      </div>
    </div>
  )
}

export default UserSlice