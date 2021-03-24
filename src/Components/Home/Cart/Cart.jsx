import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';

const Cart = (props) => {

    const cart = props.cartedItem;
    const {id, name, image, calories, fat, cholesterol, carbohydrate, description} = cart;

    // Calculation of selected items
    let totalCalories = 0;
    let totalFat = 0;
    let totalCholesterol = 0;
    let totalCarbohydrate = 0;
    for(let i = 0; i < cart.length; i++){
        const product = cart[i];
        console.log(product);
        totalCalories = totalCalories + product.calories * product.qty;
        totalFat = totalFat + product.fat * product.qty;
        totalCholesterol = totalCholesterol + product.cholesterol * product.qty;
        totalCarbohydrate = totalCarbohydrate + product.carbohydrate * product.qty;
    }

    

    return (
        <div>
            <div className="selected-items">
                <h4>Selected Details</h4>
                <h5>Total Items : {cart.length}</h5>
                <p>Calories : {totalCalories.toFixed(2)}</p>
                <p>Fat: {totalFat.toFixed(2)}</p>
                <p>Cholesterol: {totalCholesterol.toFixed(2)}</p>
                <p>Carbohydrate: {totalCarbohydrate.toFixed(2)}</p>
            </div>
            <div className="order-detail">
                <ol>
                    {
                        
                        cart.map( ct => 
                            <li className="mb-3" key={ct.id}>
                                {ct.name}
                                <span className="ml-5">{ct.qty}</span>
                                <Button
                                    className="ml-5"
                                    // callback for remove product
                                    onClick={() => props.removeCartedItem(props.cartedItem)} 
                                    variant="outline-success">
                                    Remove
                                </Button>
                                
                            </li>                            
                        )
                    }
                </ol>

            </div>
            

        </div>
    );
};

export default Cart;