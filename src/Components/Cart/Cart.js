import React, { useState } from 'react';
import CartFolder from '../CartFolder/CartFolder';
import './Cart.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashCan } from '@fortawesome/free-solid-svg-icons';

const Cart = (props) => {
    const {cart} =props
    const All=[...cart]

 const [choosen, setChoosen] = useState([]);

 const Choose = () => {
     let random = All[Math.floor(Math.random() * All.length)]
   
    let createNew = Object.assign({}, random)
   
     setChoosen(createNew)
     console.log(createNew);

 }
    return (
        <div >
       
            <h2 className='fw-bolder breakWord overflow-wrap'>Selected Cars</h2>
            {
            <div className='w-100'>
             {cart.map(one=><CartFolder key={one.id} onecart={one}></CartFolder>
         
             )}

            
            </div>
}

<button className="btn btn-dark mt-5  " onClick={Choose} type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasBottom" aria-controls="offcanvasBottom">Choose One</button>

<div className="offcanvas offcanvas-bottom" tabindex="-1" id="offcanvasBottom" aria-labelledby="offcanvasBottomLabel">
  <div className="offcanvas-header">
   
    <button type="button " className="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
  </div>
  <div className="offcanvas-body small p-2  ">
  
  <div className='canvuscar d-flex align-items-center'>
  <img className='me-5' src={choosen.picture} alt="" />
  <h4 className='me-2' >     
  {choosen.name},</h4>
  <br />
  <h4>{choosen.company}</h4>
  </div>
  </div>
</div>

<br />
<button onClick={props.clearAll} className='moreAdd'> Clear Cart
</button>
      
            
        </div>
    );
};

export default Cart;