import React, {useEffect} from "react";
import './App.css';
import Category from "./Category/Category";
import CategoryList from "./CategoryList/CategoryList";
import YandexMap from "./YandexMap/YandexMap";
const tg = window.Telegram.WebApp;
function App() {

    useEffect(() => {
        tg.ready()
    }, [])
    return (
        <div className="App">
            <YandexMap />
        </div>
    );
}

export default App;