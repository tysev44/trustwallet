import React from 'react'
import { FaEdit } from 'react-icons/fa'
import { FaStar, FaTrash } from 'react-icons/fa6'
import { Link } from 'react-router-dom';

function ProductCard({product, setdeletepop, setProdName}) {
  
  const formattedAmount = new Intl.NumberFormat('en-US');

  const handleDeletePop=()=>{
    setdeletepop(true)
    setProdName(product?.product_name)
  }

  return (
    <div className='product_card'>
        <div className='product_card_container'>
          <div className='product_card_img' style={{backgroundImage: `url(https://resserver-y77k.onrender.com/${product?.img})`}} ></div>
          <h3>{product?.product_name}</h3>
          <div className='product_card_writeup'>
            <p className='product_card_writeup_price' >#{formattedAmount.format(product?.price)}</p>
            <p>{product?.available} available</p>
          </div>
          <div className='product_card_writeup'>
            <p>
              <FaStar size={10} style={{margin:'0 5px'}} color='goldenrod' /> 
              {product?.rate}
            </p>
            <p>{product?.timer} min</p>
          </div>
          <small>{product?.description}</small>
          <div className='product_card_writeup' >
            <Link to={`/edit/${product?._id}`} className='edit_ball'>
              <FaEdit/>
            </Link>
            <div onClick={handleDeletePop} className='delete_ball' >
              <FaTrash/>
            </div>
          </div>
        </div>
    </div>
  )
}

export default ProductCard