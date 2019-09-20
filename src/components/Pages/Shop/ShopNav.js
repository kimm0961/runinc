import React from 'react';
import { Link } from 'react-router-dom';
import './ShopNav.css';


const ShopNav = (props) => {
    
    let brandListe = props.alleBrandsProp.map(brand => {
        return (
            <div className="brand" key={brand.id}>
                <li><Link to="#">{brand.name}</Link></li>
            </div>
        )
    });

        return ( 
            <div className="ShopNav">
                <h2>Events</h2>
                <h3>RUNNING SHOP</h3>
            <p>Gratis fragt ved over kr. 500,-</p>
                <ul>
                    {brandListe}
                </ul>
            </div>
         );
    
}
 
export default ShopNav;
