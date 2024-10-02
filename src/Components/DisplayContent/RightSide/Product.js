import React from 'react'
import "./RightSide.css";
import Rating from '@mui/material/Rating';
import getSymbolFromCurrency from 'currency-symbol-map'
const Product = (progs) => {
    return (
        <div className="product">
            <div className="product__image">
                <img src={progs.definition.image} height="280px" />
            </div>
            <div className="product__name">
                {progs.definition.name}
            </div>
            <div className="product__rating">
                <Rating name="read-only" value="4" style={{ fontSize: "20px" }} readOnly />
                {progs.definition.rating}
            </div>
            <div className="product__price">
                {getSymbolFromCurrency('USD')}{progs.definition.price}
            </div>
        </div>
    )
}

export default Product