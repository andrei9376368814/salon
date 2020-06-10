import React from 'react';

import './tables.css';
import img from '../IMG/vecher_13.jpg';
import Meeting from '../Navbar/meeting';

const Table=()=>{
    return (
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

export default Table;
