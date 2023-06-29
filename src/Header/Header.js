import React, {useState} from 'react';
import './Header.css';

const Header = ({onAdd}) => {

    const handleClick = (page) => {
        onAdd(page, page)
    };

    return (
        <div className={'header'}>
            <div className={"logo"}>
                <img src="/images/lk.svg" alt={''}/>
            </div>
            <h1 className={"shop-name"} onClick={()=> handleClick(0)}>EVERYDAY</h1>
            <div className={"button"}>
                <img src="/images/shop.svg" alt={''}/>
            </div>
        </div>
    );
};

export default Header;
