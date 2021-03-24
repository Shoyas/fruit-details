import React from 'react';
import Button from 'react-bootstrap/Button';
import './Cards.css';

const Cards = (props) => {
    const {id, name, image, calories, fat, cholesterol, carbohydrate, description} = props.fruits;

    return (
        <div className="container-fluid">
            <div className="row card-content">
                <div className="col-md-4 p-3">
                    <img className="img-fluid" src={image} alt=""/>
                </div>
                <div className="col-md-6 mt-5">
                    <h3>Name: {name}</h3>
                    <p>Description: {description}</p>
                    <p>Calories: {calories}</p>
                    <p>Carbohydrate: {carbohydrate}</p>
                </div>
                <div className="col-md-2 mt-5">
                    <Button 
                        // Callback for produc add
                        onClick={() => props.handleAddProduct(props.fruits)} 
                        variant="outline-success">
                        Select
                    </Button>
                </div>
            </div>
            
        </div>
    );
};

export default Cards;