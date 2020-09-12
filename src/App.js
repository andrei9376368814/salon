import React, { Component } from 'react';
import './App.css';
import Navbar from './Navbar/navbar';
import Header from './Header/header';
import Footer from './Footer/footer';

class App extends Component {
  render(){  
    return(
      <div className="app"> 
        <Header/>
        <Navbar/>
        <Footer/>
  
    </div>

    )
  }
}

export default App;
