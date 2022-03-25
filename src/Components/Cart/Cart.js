import React from 'react';
import './Cart.css'

const Cart = () => {
    return (
        <div >
       
            <h2 className='fw-bolder breakWord overflow-wrap'>Selected Clothes</h2>
            <button className='moreAdd'> Choose one
</button>
<br />
<button className='moreAdd'> Clear Cart
</button>
      
            
        </div>
    );
};

export default Cart;