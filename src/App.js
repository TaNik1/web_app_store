import React, {useEffect, useState} from "react";
import './App.css';
import Category from "./Category/Category";
import CategoryList from "./CategoryList/CategoryList";
import Product from "./Product/Product";

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
                <CategoryList onAdd={handleNameChange}/>
            </div>
        );
    } else if (page === 1){
        return (
            <div className="App">
                <Product product={name}/>
            </div>
        );
    }
}

export default App;