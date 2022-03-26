import React from 'react';
import Cars from '../Cars/Cars';
import Header from '../Header/Header';

//Mother component
const Shop = () => {
    return (
        <div>
            <Header></Header>
            <Cars></Cars>
            
        </div>
    );
};

export default Shop;