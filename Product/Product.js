import React from 'react';
import './Product.css';

const Product = ({className, product, onAdd}) => {

    return (
        <div className={"type_all"}>
            <div className={"product_type " + className}>
                <img className={'img_type'} src={"/images/product/11.png"} alt={''}/>
            </div>
            <h1 className={'dd'}>{product}</h1>
        </div>
    );
};

export default Product;
