import React, { useState } from 'react';
import ShopNav from './ShopNav';
import Produkter from './Produkter';

const Shop = () => {

     // State
     const [produkter, setProdukter] = useState([
        {skoimg: 'shoe_01.jpg', skonavn: 'Puma Highland 3000 - brown', id: 1},
        {skoimg: 'shoe_02.jpg', skonavn: 'Puma Highland 3000 - brown', id: 2},
        {skoimg: 'shoe_03.jpg', skonavn: 'Puma Highland 3000 - brown', id: 3},
        {skoimg: 'shoe_04.jpg', skonavn: 'Puma Highland 3000 - brown', id: 4},
        {skoimg: 'shoe_01.jpg', skonavn: 'Puma Highland 3000 - brown', id: 5},
        {skoimg: 'shoe_01.jpg', skonavn: 'Puma Highland 3000 - brown', id: 6},
      ]);

      const [brands, setBrands] = useState([
        {name: 'Nike', id: 1},
        {name: 'Adidas', id: 2},
        {name: 'Puma', id: 3},
        {name: 'Asics', id: 4},
        {name: 'Hummel', id: 5}
      ]);

  
    return (
        <div className="container">
            <ShopNav alleBrandsProp={brands}/>
            <Produkter alleProdukterProp={produkter}/>
        </div>
    )
}

export default Shop;

