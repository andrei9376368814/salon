import React from 'react';

import './nails.css';
import img from '../IMG/vecher_13.jpg';
import Meeting from '../Navbar/meeting';

const Nails=()=>{
    return (
        <div className="tables">
            <div className="cell3">
                <textarea></textarea>
            </div>
            <div className="cell4">
                <Meeting/>
                <img src={img} alt="cuthair"/>
            </div>
        </div>
    ) 
}

export default Nails;
