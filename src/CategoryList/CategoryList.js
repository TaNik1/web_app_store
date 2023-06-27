import React from 'react';
import './CategoryList.css';
import Category from "../Category/Category";

const categories = [
    {id: '1', title: 'Жижи', img: '/images/product/7.png'},
    {id: '2', title: 'Одноразки', img: '/images/product/8.png'},
    {id: '3', title: 'Снюс', img: '/images/product/9.png'},
    {id: '4', title: 'Допы', img: '/images/product/est.jpg'},
]


const CategoryList = () => {


    return (
        <div className={'list'}>
            {categories.map(item => (
                <Category
                    product={item}
                />
            ))}
        </div>
    );
};

export default CategoryList;
