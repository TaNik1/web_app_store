import React, {useEffect, useState} from 'react';
import './ProductList.css';
import Product from "../Product/Product";



const ProductList = ({product, onAdd}) => {

    const [manufacturers, setManufacturers] = useState([])

    const getManufacturers = async () => {
        const response = await fetch(`https://e90a-46-48-38-58.eu.ngrok.io/manufacturers/${product}`).then((response) => response.json())
        setManufacturers(response)
    }

    useEffect(() => {
        getManufacturers()
    }, [])

    return (
        <div>
            <div className={"bar"}>
                <div className={"button-bar"}><h2>kkk</h2></div>
            </div>
            <hr className={"line"}/>
            <div className={'row'}>
                <div className={'list1'}>
                    {manufacturers.slice(0, ~~((manufacturers.length + 1) / 2)).map(item1 => (
                        <Product
                            className={item1}
                            product={item1}
                        />
                    ))}
                </div>
                <div className={'list2'}>
                    {manufacturers.slice(~~((manufacturers.length + 1) / 2), manufacturers.length).map(item1 => (
                        <Product
                            className={item1}
                            product={item1}
                        />
                    ))}
                </div>
            </div>
        </div>
    )
        ;
};

export default ProductList;
