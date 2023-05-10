import React from 'react';
import './CategoryList.css';
import Category from "../Category/Category";

const categories = [
    {id: '1', title: 'Жижи'},
    {id: '2', title: 'Одноразки'},
    {id: '3', title: 'Снюс'},
    {id: '4', title: 'Допы'},
]


const CategoryList = () => {


    return (
        <div className={'list'}>
            {categories.map(item => (
                <Category
                    product={item}
                    className={'item'}
                />
            ))}
        </div>
    );
};

export default CategoryList;
