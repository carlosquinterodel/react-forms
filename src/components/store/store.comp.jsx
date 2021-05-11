import React from 'react';
import Client from '../clients/client.comp';
import CreateClient from '../create-client/create-client.comp';
import './store.style.css'



const Store = () => {
    let dataStore = [
            {
                id: 1,
                name:'Manuela Perez',
                sneakers:[
                    {
                        id : 'z34',
                        ref: 'nike 360',
                        value: 120000
                    },
                    {
                        id : 'l4',
                        ref: 'adidas superstart',
                        value: 150000
                    }
                ]
            },
            {
                id: 2,
                name:'Camilo Gutierrez',
                sneakers:[
                    {
                        id : 'n52',
                        ref: 'new balance',
                        value: 100000
                    },
                    {
                        id : 'a3',
                        ref: 'puma',
                        value: 180000
                    }
                ]
            },
            {
                id: 3,
                name:'Harold Patiño',
                sneakers:[
                    {
                        id : 'po9',
                        ref: 'guchi',
                        value: 560000
                    },
                    {
                        id : 'yt6',
                        ref: 'puma',
                        value: 190000
                    }
                ]
            }
        ]
    return (
        <div className="store-container">
            <h1>Lunatic SHOES</h1>
            {dataStore.map( (client, index) => {
               return (
                   <React.Fragment key={client.id}>
                       <Client client={client}/>
                   </React.Fragment>
                   
               );
              
           })}
           <CreateClient />
            
        </div>
    );
}

export default Store ;