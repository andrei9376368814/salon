import React from 'react';
import Nails from '../Nails/nails';
import Table from '../Table/table';




const Navbar=()=>{
    return(
   <div className="section"> 
        <section>
             <Table/>
         </section>
        <section>
             <Nails/>
        </section>
        <section></section>
    </div>
) 
}

export default Navbar;
