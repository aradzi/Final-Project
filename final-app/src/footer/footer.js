import React, { Component } from 'react';
import './footer.css';


class Footer extends Component {
  render() {
    return (
      <div id="footer">
      <h1>Created by Ana Radzi | &copy; 2019</h1>
       <a href="https://www.linkedin.com/in/anaradzi/">
       <img border="0" alt="linkedin" src="linkedin.png" width="50" height="50"></img>
       </a>
       <a href="https://github.com/aradzi">
       <img border="0" alt="github" src="github.jpg" width="50" height="50"></img>
       </a>
      </div>



    );
  }
}

export default Footer;

