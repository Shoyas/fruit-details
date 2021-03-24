import React, { useState } from 'react';
import './Body.css';
import Cart from '../Cart/Cart';

import FakeData from '../../Asset/FakeData/FakeData';
import Cards from '../Cards/Cards';

const Body = () => {
    const [fruits, setFruits] = useState(FakeData);

    const [cartedItem, setCartedItem] = useState([]);

    // Product add section
    const handleAddProduct = (product) => {
        let exist = cartedItem.find((x) => x.id === product.id);

        if(exist){
            setCartedItem(
                cartedItem.map((x) =>
                    x.id === product.id ? {...exist, qty: exist.qty + 1} : x
                )
            );
        }
        else{
            setCartedItem([...cartedItem, {...product, qty: 1}]);
        }
    }

    // Product remove section
    const removeCartedItem = (product) => {

        let exist = cartedItem.find((x) => x.id === product[0].id);
        if(exist.qty === 1){
            setCartedItem(cartedItem.filter((x) => x.id !== product[0].id));
        }
        else{
            setCartedItem(
                cartedItem.map((x) =>
                    x.id === product[0].id ? {...exist, qty: exist.qty - 1} : x
                )
            );
        }    
    }

    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col-md-8 body-details-content">
                    {
                        fruits.map(fruits => <Cards 
                            key={fruits.id}
                            fruits={fruits}
                            handleAddProduct={handleAddProduct}
                            />
                        )
                    }
                </div>
                <div className="col-md-4">
                        <Cart 
                            handleAddProduct={handleAddProduct}
                            removeCartedItem={removeCartedItem}
                            cartedItem={cartedItem}
                        />
                </div>
            </div>
        </div>
    );
};

export default Body;