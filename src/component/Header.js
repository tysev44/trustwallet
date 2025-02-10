import React from 'react'
import { FaBell, FaSearch } from 'react-icons/fa'
import { FaMessage } from 'react-icons/fa6'

function Header({menu, order}) {
  return (
    <div className='main_header'>
        {
          menu ?
            <h2>Menu</h2>
          :
          order ?
          <h2>Orders</h2>
          :
          <h2>DashBoard</h2>
        }

        <div className='search_input_field'>
            <input placeholder='Search' />
            <FaSearch  />
        </div>

        <div className='icon_links' >
          <div>
            <FaMessage />
          </div>

          <div>
            <FaBell />
          </div>
        </div>
    </div>
  )
}

export default Header