import React from "react";
import'./Header.css';
import { HashLink } from "react-router-hash-link";

export default function Header(){
    return <div className="header">
        <div className="header-contents">
            <h2>TASTY FOOD</h2>
            <p style={{fontSize:25} }>order now!</p>
            <HashLink smooth to='#menu'><button>VIEW MENU</button></HashLink></div>
        
    </div>
}