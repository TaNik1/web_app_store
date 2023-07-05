import React, {useState} from 'react';
import './Category.css';
import Product from "../Product/Product";
const Category = ({product, onChange}) => {

    const handleClick = (name) => {
       onChange(name, 1)
    };

    return (
        <a className={"product"} onClick={()=> handleClick(product.title)}>
            <h2 className={'title'}>{product.title}</h2>
            <img className={"img"} src={product.img} alt={""}/>
        </a>
    );
};

export default Category;
