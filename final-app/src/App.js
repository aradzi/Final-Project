import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './header/header';
import Navigation from './navigation/navigation';
import Portfolio from './portfolio/portfolio';
import Blog from './blog/blog';
import Aboutme from './aboutme/aboutme';
import Footer from './footer/footer';


class App extends Component {
  render() {
    return (
      <div className="App">
        
        <Header></Header>
         <Navigation></Navigation>
         <Aboutme></Aboutme>
         <Portfolio></Portfolio>
         <Blog></Blog>
        <Footer></Footer>
      
         
      </div>
    );
  }
}

export default App;
