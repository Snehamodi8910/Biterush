import React from "react";
import './FoodDisplay.css'
import { Fooditem } from "../Fooditems/Fooditems";
import { foodListState } from "../../Context/atom";
import { useRecoilValue } from "recoil";

export function FoodDisplay() {
    const food_list_item = useRecoilValue(foodListState);
    return (
        <div className="display" id='display'>
            <h2>Best Dishes for you</h2>
            <div className="food-display-list">
                {food_list_item.map((item, index) => {
                    return <Fooditem id={item._id} index={index} name={item.name} price={item.price} desc={item.description} img={item.image} />
                })}
            </div>


        </div>
    )
}