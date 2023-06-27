import React, {useEffect} from "react";
import './App.css';
import Category from "./Category/Category";
import CategoryList from "./CategoryList/CategoryList";
const tg = window.Telegram.WebApp;
function App() {

    useEffect(() => {
        tg.ready()
    }, [])
    return (
        <div className="App">
            <CategoryList />
        </div>
    );
}

export default App;