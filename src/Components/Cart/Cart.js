import React from 'react';
import CartFolder from '../CartFolder/CartFolder';
import './Cart.css'

const Cart = (props) => {
    const {cart} =props
    const All=[...cart]
  let allID=  All.map(car=>car.id)   
  console.log(allID); 

    return (
        <div >
       
            <h2 className='fw-bolder breakWord overflow-wrap'>Selected Cars</h2>
            {
            <div className='w-100'>
             {cart.map(one=><CartFolder key={one.id} onecart={one}></CartFolder>
         
             )}

            
            </div>
}
            <button className='moreAdd'> Choose one
</button>
<br />
<button className='moreAdd'> Clear Cart
</button>
      
            
        </div>
    );
};

export default Cart;