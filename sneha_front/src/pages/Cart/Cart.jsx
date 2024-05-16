import React from "react";
import './Cart.css';
import { foodListState } from "../../Context/atom";
import { useRecoilValue } from "recoil";
import { Itemcount } from "../../Context/atom";
export default function Cart() {
    const foodlist = useRecoilValue(foodListState);

    const itemCount = useRecoilValue(Itemcount);
    let grandtotal = 0;
    return <div className="cart">
        <div className="cart-items">
            <div className="items-title">
                <p>Item</p>
                <p>Title</p>
                <p>Price</p>
                <p>Quantity</p>
                <p>Total</p>
            </div>


            {
                foodlist.map((item, index) => {
                    if (itemCount[item._id] > 0) {
                        const total = item.price * itemCount[item._id];
                        grandtotal += total;


                        return (
                            <div className="items-title items-item">
                                <img src={item.image} alt="" />
                                <p>{item.name}</p>
                                <p>${item.price}</p>

                                <p>{itemCount[item._id]}</p>
                                <p>${total} </p>


                            </div>
                        )
                    }
                })
            }

        </div>
        <div className="bottom">
            <div className="total">
                <h2>Grand Total</h2>
                <div className="details">
                    <p>Subtotal</p>
                    <p>${grandtotal}</p>
                </div>
                <div className="total-details">
                    <p>Delievry Fee</p>
                    <p>${2}</p>

                </div>

                <hr />
                <p>${grandtotal + 2}</p>
                <button>Proceed to Pay</button>
            </div>
        </div>


    </div>
}