import React from "react";
import './Menu.css';
import { menu_list } from '../../assets/assets';

export default function Menu({category, setCategory}) {
    return (
        <div className="menu" id="menu">
            <div className="menu-content">
                <h1>Explore Menu</h1>
                <p className="menu-text">Choose your meal from our plethora of dishes</p>
            </div>
            <div className="menu-list">
                {
                    menu_list.map((item, index) => (
                        <div
                            key={index}
                            className={`menu-list-item ${category === item.menu_name ? 'activity' : ''}`}
                            onClick={() => setCategory(prev => prev === item.menu_name ? '' : item.menu_name)}
                        >
                            <img src={item.menu_image} alt="" />
                            <p>{item.menu_name}</p>
                        </div>
                    ))
                }
            </div>
        </div>
    );
}
