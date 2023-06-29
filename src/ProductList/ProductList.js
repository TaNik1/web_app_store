import React, {useState} from 'react';
import './ProductList.css';
import Product from "../Product/Product";

const categories = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 0
]


const ProductList = ({product, onAdd}) => {
    return (
        <div className={'row'}>
            <div className={'list1'}>
                {categories.slice(0, ~~((categories.length + 1) / 2)).map(item1 => (
                    <Product
                        className={item1}
                        product={product}
                    />
                ))}
            </div>
            <div className={'list2'}>
                {categories.slice(~~((categories.length + 1) / 2), categories.length).map(item1 => (
                    <Product
                        className={item1}
                        product={product}
                    />
                ))}
            </div>
        </div>
    );
};

export default ProductList;
