import React from 'react';
import Accordion from '../Accordion/Accordion';
import Cars from '../Cars/Cars';
import Header from '../Header/Header';

//Mother component
const Shop = () => {
    return (
        <div>
            <Header></Header>
            <Cars></Cars>
            <Accordion></Accordion>
        </div>
    );
};

export default Shop;