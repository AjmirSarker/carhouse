import React from 'react';
import './CartFolder.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashCan } from '@fortawesome/free-solid-svg-icons';
// Taking data from cart picked
const CartFolder = (props) => {
    const {name,picture}=props.onecart
   
    
    return (
        <div className='onecartt d-md-flex w-50 align-items-center mt-3  '>
           <img src={picture} alt="" />
           <p className='fw-bold'>{name} <FontAwesomeIcon className='text-danger' icon={faTrashCan }></FontAwesomeIcon></p>
         
         
           
            
        </div>
    );
};

export default CartFolder;