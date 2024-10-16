import React from 'react'
import './index.css'
import { CiMenuBurger } from "react-icons/ci";

const Header = () => {
   
  

     return (
        <div className="header">
        <div className="logo">AI.GEN</div>
       
        <div className='responsive'>
        <nav className="navigation">
            <a href="#features">Features</a>
            <a href="#roadmap">Roadmap</a>
            <a href="#tokenomics">Tokenomics</a>
        </nav>
        <div className="buttons">
            <button className="whitepaper-btn">Whitepaper</button>
            <button className="get-started-btn">Get Started</button>
        </div>
        </div>
    </div>
     )
    
}

export default Header