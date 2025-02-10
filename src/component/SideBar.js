import React from 'react'
import { FaHistory } from 'react-icons/fa'
import { FaBowlFood, FaPlus, FaReceipt, FaShop, FaUserGroup } from 'react-icons/fa6'
import { Link } from 'react-router-dom'

function SideBar({dash, order, menu}) {
  return (
    <div className='sidebar_container' >

      {
         dash ?
            <Link className='sidebar_item_colored'>
               <div>
                  <FaHistory size={15} />
                  <p>Dashboard</p>
               </div>
            </Link>
         :
         <Link to={'/'} className='sidebar_item'>
            <div>
               <FaHistory size={15} />
               <p>Dashboard</p>
            </div>
         </Link>
      }

      {
         order ?
         <Link className='sidebar_item_colored'>
            <div>
               <FaShop size={15} />
               <p>Orders</p>
            </div>
            <strong>35</strong>
         </Link>
         :
         <Link to={'/orders'} className='sidebar_item'>
            <div>
               <FaShop size={15} />
               <p>Orders</p>
            </div>
            <strong>35</strong>
         </Link>
      }

      {
         menu ?
         <Link to={'/products'} className='sidebar_item_colored'>
            <div>
               <FaReceipt size={15} />
               <p>Menu</p>
            </div>
         </Link>
         :
         <Link to={'/products'} className='sidebar_item'>
            <div>
               <FaReceipt size={15} />
               <p>Menu</p>
            </div>
         </Link>
      }


     <Link className='sidebar_item'>
        <div>
         <FaUserGroup size={15} />
         <p>Reviews</p>
        </div>
     </Link>

     <div className='add_menu_box' >
         <FaBowlFood size={40} />
         <p>Organize Your menus through button bellow </p>
         <Link to={'/products-upload'} className='add_menu_btn'>
            <FaPlus size={10} />
            <p>Add Products</p>
         </Link>
     </div>
    </div>
  )
}

export default SideBar