import React from 'react'

function MenuCard({category, images}) {

    const getimg = images?.find(img => img.title === category?.title)

  return (
    <div className='menu_card'>
        <h2>#1</h2>
        <div className='menu_card_texts'>
            <h3>{category.title}</h3>
            <div className='menu_card_inner_texts'>
                <strong>#2,000</strong>
                <p>Orders 10</p>
            </div>
        </div>
        <img style={{width:'60px', height:'60px'}} src={getimg?.img} alt='' />
    </div>
  )
}

export default MenuCard