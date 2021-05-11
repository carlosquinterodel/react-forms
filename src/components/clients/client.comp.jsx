import React from 'react';
import Sneaker from '../sneakers/sneaker.comp';
import './client.style.css'


const Client = (props) => {
    console.log({props})
    return (
       <div className="client-container">
           {props.client.name}
           {props.client.sneakers.map( (sneaker, index) => {
               return (
                   <React.Fragment key={sneaker.id}>
                       <Sneaker sneaker={sneaker}/>
                   </React.Fragment>
                   
               );
              
           })}
       </div>
       
    )
}

export default Client ;