import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <div className=" back-color container-fluid" >
            <div className="row">
                <div className="col-md-4 mt-5">
                    <p><strong>Address: Lorem ipsum, dolor sit amet consectetur adipisicing elit. Porro, nostrum?</strong></p>
                    
                </div>
                <div className="col-md-4 mt-5">
                    <p> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus, totam reprehenderit vitae facere modi magnam eligendi facilis corporis pariatur sit!</p>
                </div>
                <div className="col-md-4 mt-5">
                    <p><strong>Payment :</strong></p>
                    <p>bKash: 0175265415</p>
                    <p>Nogod: 0175265415</p>
                    <p>Rocket: 0175265415</p>
                </div>
            </div>
        </div>
    );
};

export default Footer;