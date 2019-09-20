import React from 'react'

const Produkter = (props) => {

    let produktListe = props.alleProdukterProp.map(produkt => {
            return (
                <div className="produkt" key={produkt.id}>
                <img src={'/img/produktbilleder/' + produkt.skoimg} alt="skobillede"/>
                <p>{produkt.skonavn}</p> 
                </div>
            )
        });

    
    return ( 
        <div className="produkt-liste">
            {produktListe}
        </div>
     );
    
    }

 
export default Produkter;