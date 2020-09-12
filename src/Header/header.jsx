import React from 'react';
import './header.css';
import Popup from '../Popup/popup';
const Header=()=>{
    return(
    <div className="header"> 
        <h1>Парикмахерский салон Образ</h1>
        <div className="prezentc">
            <a href="#" className="button">мастера</a>
            <a href="#" className="button">прически</a>
            <a href="#" className="button">маникюр</a>
            <a href="#" className="button">косметика</a>
            
            <Popup/>
        </div>
    </div>
    )
}
export default Header;