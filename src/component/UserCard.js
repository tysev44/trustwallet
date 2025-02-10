import React from 'react'
import { FaCartShopping, FaMessage, FaPerson } from 'react-icons/fa6'

function UserCard({image}) {
  return (
    <div  className='menu_slide'>
        <FaPerson className='user_avatar' />
        <div className='menu_card_writes'>
            <h3>{image.title}</h3>
            <p>location</p>
        </div>
        <div className='user_icons'>
            <div>
                <small>1</small>
                <FaMessage color='grey' />
            </div>
            <div>
            <small>1</small>
                <FaCartShopping color='grey' />
            </div>
        </div>
    </div>
  )
}

export default UserCard