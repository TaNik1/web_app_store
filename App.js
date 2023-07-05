import React, {useEffect, useState} from "react";
import './App.css';
import Category from "./Category/Category";
import CategoryList from "./CategoryList/CategoryList";
import Product from "./Product/Product";
import ProductList from "./ProductList/ProductList";
import Header from "./Header/Header";

const tg = window.Telegram.WebApp;
const NameProduct = React.createContext(undefined)

function App() {
    const [name, setName] = useState('')
    const [page, setPage] = useState(0)
    const handleNameChange = (name, page) => {
        setName(name)
        setPage(page)
    }

    useEffect(() => {
        tg.ready()
    }, [])
    if (page === 0) {
        return (
            <div className="App">
                <Header onAdd={handleNameChange}/>
                <CategoryList onAdd={handleNameChange}/>
            </div>
        );
    } else if (page === 1){
        return (
            <div className="App">
                <Header onAdd={handleNameChange}/>
                <ProductList product={name}/>
            </div>
        );
    }
}

export default App;