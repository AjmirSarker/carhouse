import React, { useEffect, useState } from 'react';
import Car from '../Car/Car';
import Cart from '../Cart/Cart';
import './Cars.css';
import Modal from 'react-modal';
const Cars = () => {
    
    for(let i=0;i<=100;i++){
        const a =0 + Math.floor(Math.random() * 4)
        console.log(a);
    }
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
  const [cars, setCars] = useState([]);
  const [modalIsOpen, setIsOpen] = useState(false);
  function openModal() {
    setIsOpen(true);
  }
  function closeModal() {
    setIsOpen(false);
  }
  
  useEffect(() => {
    fetch('car.json')
      .then((res) => res.json())
      .then((car) => setCars(car));
  }, []);
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
   let allId= newCart.map(ID=>newCart.id)
   console.log(allId);
 
   
    // console.log('60 - 100 Random Number:', 60 + Math.floor(Math.random() * 40))
   
   
 
   
    
    
    
  };
  return (
    // <div className='  marg-top'>
    //     <div className=" container row ">
    //     <div className="col-7 col-md-8 col-lg-10 ">
    //     <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
    //             {
    //               cars.map(car=><Car key={car.id} car={car}></Car>)

    //             }
    //         </div>
    //     </div>
    //     <div className="col-5 col-md-4 col-lg-2 ">
    //         <div className='ps'
    //         ><Cart></Cart></div>

    //     </div>
    //     </div>
    // </div>
    <div>
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
            <Cart cart={cart}></Cart>
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
         <h1>Can't select more than one product </h1>
      </Modal>
    </div>
    
  );
};

export default Cars;
