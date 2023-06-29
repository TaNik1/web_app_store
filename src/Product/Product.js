import React from 'react';
import './Product.css';

const Product = ({className, product, onAdd}) => {

    return (
        <div className={"product_type " + className}>
            <div className={"dd"}>{product}</div>
        </div>
    );
};

export default Product;
