import React from 'react';
import './sneaker.style.css'


const Sneaker = (props) => {
    return (
        
        <div>{props.sneaker.ref}   <small>{props.sneaker.value}</small></div>
    );
}

export default Sneaker ;