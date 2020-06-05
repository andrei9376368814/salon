import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './Header/header';
import Navbar from './Navbar/navbar';

class App extends Component {
  render(){  
    return(
      <div className="app"> 
   <Header/>
    <Navbar/>
    </div>

    )
  }
}

export default App;
