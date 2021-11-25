import { useEffect, useState } from 'react';
import './ItemCount.scss';
import cart from '../../assets/cart-icon.svg';

const ItemCount = ({ stock = 5, initial = 1 }) => {

    const [count, setCount] = useState(0);

    useEffect(() => {
        setCount(initial);
    },[]);

    const increment = () => {
        if (count < stock) {
            setCount(count + 1);
        }
    }

    const decrement = () => {
        if (count > initial) {
            setCount(count - 1);
        }
    }
    return (
        <>
            <div className="ItemButtonContainer">
                <div className='ItemCountContainer'>
                    <button onClick={decrement} className='Delete'>-</button>
                    <div className='Count'>{count}</div>
                    <button onClick={increment} className='Add'>+</button>
                </div>

                <button className='AddToCart'>
                    <img src={cart} alt="" className='AddToCartIcon'/>
                </button>
            </div>
        </>
    );
}

export default ItemCount;