import React from "react";
import './ItemListContainer.scss'
import Item from './Item';

const ItemListContainer = () => {
    return (
        <>
        <div className='ItemListContainer'>
            <Item/>
            <Item/>
            <Item/>
            <Item/>
            <Item/>
            <Item/>
            <Item/>
        </div>
        </>
    )
}

export default ItemListContainer