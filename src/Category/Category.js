import React from 'react';
import './Category.css';

const Category = ({product, className, onAdd}) => {

    return (
        <div className={'product ' + className}>
            <div className={'title'}>{product.title}</div>
            <div className={'img'}/>
        </div>
    );
};

export default Category;
