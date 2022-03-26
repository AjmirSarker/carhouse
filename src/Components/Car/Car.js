import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import './Car.css'

const Car = (props) => {
    const {name,price,picture,company} = props.car
    return (
        <div className="col ">
        <div className="card h-100 shadow-lg border-0">
          <img src={picture} className="card-img-top img-fluid p-3" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{name}</h5>
            <p className="card-text">{company}</p>
            <p className="card-text">{price}</p>
          </div>
          <div className="card-footer new-footer ">
            <button onClick={()=>{props.AddToCart(props.car)}} className='AddToCart mb-3'><span className='me-3'> Add To Cart </span>
            <FontAwesomeIcon icon={faShoppingCart }></FontAwesomeIcon>
       </button>
          </div>
        </div>
      </div>
    );
};

export default Car;