import React from 'react';
import './navbar.css';
import img from '../IMG/vecher_13.jpg';
import Meeting from './meeting';


const Navbar=()=>{
    return(
     <div className="table">
         <div className="cell1">
             <textarea></textarea>
         </div>
         <div className="cell2">
             <Meeting/>
             <img src={img} alt="cuthair"/>
         </div>
     </div>

) 
}

export default Navbar;
