import React from 'react';
import './CartFolder.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashCan } from '@fortawesome/free-solid-svg-icons';

const CartFolder = (props) => {
    const {name,picture}=props.onecart
   
    
    return (
        <div className='onecart d-md-flex w-50 align-items-center mt-3  '>
           <img src={picture} alt="" />
           <h4>{name}</h4>
           <FontAwesomeIcon  icon={faTrashCan }></FontAwesomeIcon>
           
            
        </div>
    );
};

export default CartFolder;