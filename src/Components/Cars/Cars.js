import React, { useEffect, useState } from 'react';
import Car from '../Car/Car';
import Cart from '../Cart/Cart';
import './Cars.css';
import Modal from 'react-modal';
const Cars = () => {
    
 
    // Modal    
    const customStyles = {
        content: {
          top: '50%',
          left: '50%',
          right: 'auto',
          bottom: 'auto',
          marginRight: '-50%',
          transform: 'translate(-50%, -50%)',
          zIndex:2
        },
      };
      Modal.setAppElement('#root');
      // Usestate
  const [cars, setCars] = useState([]);
  const [modalIsOpen, setIsOpen] = useState(false);
  //Modal open function
  function openModal() {
    setIsOpen(true);
  }
  //Modal close function
  function closeModal() {
    setIsOpen(false);
  }
  //Load all data
  useEffect(() => {
    fetch('car.json')
      .then((res) => res.json())
      .then((car) => setCars(car));
  }, []);
  //Add to cart
  const [cart, setCart] = useState([]);

  const AddToCart = (carSelect) => {
     
  let newCart = []
    
    const exists = cart.find((car) => car.id === carSelect.id);
    if (!exists) {
        newCart = [...cart, carSelect];
        if(newCart.length<5){
            setCart(newCart);
        }
        else{
            openModal()
        }
      
    }
  
        else {
    newCart=[...cart]
    openModal()
    }
 
    
  };
  //Clear all call
  const clearAll=()=>{
    setCart([])

  }
 

  return (

    <div className='mb-5'>
    <div className="container marg-top">
      <div className="row">
        <div className="col-7 col-md-8 col-lg-9  ">
          <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
            {cars.map((car) => (
              <Car key={car.id} car={car} AddToCart={AddToCart}></Car>
            ))}
          
          </div>
        </div>
        <div className="col-4 col-md-2 col-lg-2 ">
          <span>
          <div className="ps">
            <Cart key={cart.id} clearAll={clearAll} cart={cart} ></Cart>
          </div>
          </span>
        </div>
      </div>
      
    </div>
    <Modal
  
        isOpen={modalIsOpen}
       
        onRequestClose={closeModal}
        style={customStyles }
        contentLabel="Example Modal"
      >
         <h1>Can't select more than one car of same model and can't add more than 4 models at a same time. </h1>
      </Modal>
     
    </div>
    
  );
};

export default Cars;
