import React, { useState } from "react";
import './Home.css';
import Menu from '../../components/Menu/Menu'
import Header from '../../components/Header/Header'
import { FoodDisplay } from "../../components/FoodDisplay/FoodDisplay";
export default function Home(){
    const[category,setCategory]=useState('');
    return <div>
        <Header />
        <Menu setCategory={setCategory} category={category}/>
        <FoodDisplay category={category}/>
    </div>
}