import React from 'react'

function CartegoryCard({category, images}) {

    const getimg = images?.find(img => img.title === category?.title)

  return (
    <div className='category_card'>
        <img src={getimg?.img} alt='' />
        <div className='category_card_texts'>
            <h3>{category.title}</h3>
            <p>Total Sales</p>
        </div>
        <h2>75</h2>
    </div>
  )
}

export default CartegoryCard