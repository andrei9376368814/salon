import React from 'react';
import './popup.css';

const Popup = ()=>{
   return(
      <div className="wrapper">
         <input type="checkbox" id="modal"/>
         <label className="btn" for="modal">заказать услугу</label>
          <form action="#" className="popup">
             <span>введите ваши данные</span>
             <input type="text"/>
             <input type="text"/>
             <input className="submit" type="submit"/>
             <label className="close" for="modal">+</label>
        
          </form>
       </div>
    )
}
export default Popup;