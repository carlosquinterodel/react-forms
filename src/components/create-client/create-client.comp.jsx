import React, { useState } from 'react';
import './create-client.style.css'


const CreateClient = () => {

    const [name, setName] = useState('1');
    const [ref, setRef] = useState('');
    const [value, setValue] = useState('0');

    const addOrder = (event) => {
        event.preventDefault();
        console.log('Nombre del cliente: ' + name);
        console.log('Referencia del Tenis: ' + ref);
        console.log('Valor del Tenis: ' + value);
    }
    return (
       <div className="create-client-container">
           <h3>Crear Pedido</h3>
           <table className="table-container" >
               <tr>
                   <td>Nombre Cliente</td>
                   <td><select type="text" 
                        value={name}
                        onChange={(event)=>{
                            setName(event.target.value);
                        }}>
                            <option value="1">Manuela Perez</option>
                            <option value="2">'Camilo Gutierrez</option>
                            <option value="3">Harold Patiño</option>
                            </select></td>
               </tr>
               <tr>
                   <td>Referencia del Zapato</td>
                   <td><input type="text" 
                            value={ref}
                            onChange={(event)=>{
                                setRef(event.target.value);
                            }}/></td>
               </tr>
               <tr>
                   <td>Valor de Venta</td>
                   <td><input type="text"
                            value={value}
                            onChange={(event)=>{
                                setValue(event.target.value);
                            }} /></td>
               </tr>
           </table>
           <br />
           <button onClick={addOrder}>Crear</button>
       </div>
       
    )
}

export default CreateClient ;