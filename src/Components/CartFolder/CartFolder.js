import React from 'react';
import './CartFolder.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashCan } from '@fortawesome/free-solid-svg-icons';
// Taking data from cart picked
const CartFolder = (props) => {
    const {name,picture}=props.onecart
   
    
    return (
        <div className='onecart d-md-flex w-50 align-items-center mt-3  '>
           <img src={picture} alt="" />
           <h4>{name}</h4>
           <FontAwesomeIcon className='text-danger' icon={faTrashCan }></FontAwesomeIcon>
           
            
        </div>
    );
};

export default CartFolder;