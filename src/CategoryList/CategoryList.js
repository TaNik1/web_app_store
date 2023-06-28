import React, {useState} from 'react';
import './CategoryList.css';
import Category from "../Category/Category";

const categories = [
    {id: '1', title: 'Жижи', img: '/images/product/7.png'},
    {id: '2', title: 'Одноразки', img: '/images/product/8.png'},
    {id: '3', title: 'Снюс', img: '/images/product/9.png'},
    {id: '4', title: 'Допы', img: '/images/product/est.jpg'},
]


const CategoryList = ({onAdd}) => {
    const [name, setName] = useState('')
    const [page, setPage] = useState(0)
    const handleNameChange = (name, page) => {
        setName(name)
        setPage(page)
    }
    onAdd(name, page)
    return (
        <div className={'list'}>
            {categories.map(item => (
                <Category
                    product={item}
                    onChange={handleNameChange}
                />
            ))}
        </div>
    );
};

export default CategoryList;
