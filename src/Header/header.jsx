
import React from 'react';
import './header.css';



const Header=()=>{
    return(

	 <header className='header'> 
        <h1>Парикмахерский салон Образ</h1>
             <div className="prezent"> 
                    <a href="#">Мастера</a>
                    <a href="#">Прически</a>
                    <a href="#">Мастера маникюра</a>
                    <a href="#">Средства ухода</a>
                    <a href="#">Вход</a>
             </div>
           
        </header>
        
    )
}
export default Header;