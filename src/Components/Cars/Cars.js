import React, { useEffect, useState } from 'react';
import Car from '../Car/Car';
import Cart from '../Cart/Cart';
import './Cars.css'
const Cars = () => {
   const [cars,setCars]=useState([])
   useEffect(()=>{
       
       fetch('car.json')
       .then(res=>res.json())
       .then(car=>setCars(car))
       
   },[])
    return (
        <div className='container pr marg-top'>
            <div className=" row ">
            <div className="col-7 col-md-9 col-lg-10 ">
            <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
                    {
                      cars.map(car=><Car key={car.id} car={car}></Car>)

                    }
                </div>
            </div>
            <div className="col-5 col-md-3 col-lg-2 ">
                <div className='ps'
                ><Cart></Cart></div>

            
            </div>
            </div>
        </div>
    );
  
};

export default Cars;