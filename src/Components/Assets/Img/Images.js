
import React, { Component } from 'react';
import './images.css';

const Images = (props) => {
    console.log(props)
    return (
        <row>
        <div className="pics">
            <img src={props.imageData.throwImage} height="360px" width="360px"></img>
            <p className="throw">{props.imageData.throwName}</p>
            <p className="price">{props.imageData.priceColors}</p>
        </div>
        </row>
    );
};

export default Images; 