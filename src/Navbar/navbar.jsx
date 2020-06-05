import React from 'react';
import './navbar.css';


const Navbar=()=>{
    return(
     <div className="navbar">
       <nav>
          <a href = "#">Ссылка 1</a> 
          <a href = "#">Ссылка 2</a> 
          <a href = "#">Ссылка 3</a> 
            <p>Панель навигации</p>
        </nav>
        <aside>
             <p>Справа мы разместили</p>
        </aside>
        <section>
              <h2>Заголовок второго уровня</h2>
              <p>Раздел 1</p>
        </section>
        <section>
               <h2>Заголовок второго уровня</h2>
                <p>Раздел 2</p>
        </section>
    </div>

) 
}

export default Navbar;
