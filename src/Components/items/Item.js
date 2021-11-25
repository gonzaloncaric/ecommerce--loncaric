import React from 'react';
import './Item.scss'
import ItemCount from './ItemCount';
import imgProduct from '../../assets/product1.jpg'

const Item = () => {
    return (
        <>
        <div className='ItemContainer'>
            <img src={imgProduct} alt="product" className='ItemImg'/>
            <div className="ItemInfoContainer">
                <h3 className='ItemName'>Nombre del producto</h3>
                <p className='ItemPrice'>$0000</p>
                <ItemCount/>
            </div>
        </div>
        </>
    )
}

export default Item