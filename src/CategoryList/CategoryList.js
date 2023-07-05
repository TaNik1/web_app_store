import React, {useEffect, useState} from 'react';
import './CategoryList.css';
import Category from "../Category/Category";


const categories = [{id: "1", title: "ывывв", img: '/images/product/7.png'}]

const CategoryList = ({onAdd}) => {
    const [name, setName] = useState('')
    const [page, setPage] = useState(0)
    const [categories, setCategories] = useState([])

    const getCategories = async () => {
        const response = await fetch('https://e90a-46-48-38-58.eu.ngrok.io/categories').then((response) => response.json())
        setCategories(response)
    }

    useEffect(() => {
        getCategories()
    }, [])

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
