import React from 'react';
import './Category.css';

const Category = ({product, img, onAdd}) => {

    function op(){
        return (
            <div>хуй</div>
        )
    }

    return (
        <button className={"product"} onClick={op}>
            <h2 className={'title'}>{product.title}</h2>
            <img className={"img"} src={product.img} alt={""}/>
        </button>
    );
};

export default Category;
