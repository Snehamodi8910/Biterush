import { useState } from "react";
import './Signup.css'
import { useNavigate } from 'react-router-dom';
import { authenticate } from "../../Context/atom";
import { useSetRecoilState } from "recoil";
import { Link } from "react-router-dom";
import { assets } from "../../assets/assets";
import { Footer } from "../Footer/Footer";

export default function Signin() {
    const [email, setEmail] = useState('');
    const [password, setPass] = useState('');
    const setAuthenticated = useSetRecoilState(authenticate)
    const navigate = useNavigate();
    return <div>
        <div>

            <Link to='/'><img src={assets.logo} alt="" width={160} style={{ marginTop: '40px', marginLeft: '8%' }} />
            </Link>
        </div>

        <div className="signup_container">

            <div className="sign-right">
                <h1 style={{ color: 'gray' }}>WELCOME BACK !</h1>
                <br />
                <input type="text" placeholder="Email" 
                    style={{
                        padding: 10,
                        margin: 10
                    }} onChange={function (event) {
                        const value = event.target.value;
                        setEmail(event.target.value);

                    }} /><br />

                <input type="text" placeholder="Password" 
                    style={{
                        padding: 10,
                        margin: 10
                    }} onChange={function (event) {
                        const value = event.target.value;
                        setPass(event.target.value);

                    }} /><br />

                <button className="btn" onClick={async () => {
                    console.log("hello")
                    await fetch("http://localhost:3000/signin",     /*The fetch function takes an options object as its second parameter. Here, the options object specifies the method as "POST" and includes the request body.

            The request body is created using JSON.stringify() with an object containing title and description properties. These properties are taken from the component's state, title and desc.
            
            Additionally, the fetch options object specifies the headers property, where "contentType":"application/json " is set.*/
                        {
                            method: "POST",
                            body: JSON.stringify({
                                email: email,
                                password: password
                            }),
                            headers: {
                                "Content-Type": "application/json "
                            }
                        }).then(async function (res) {
                            if (res.ok) {
                                const json = await res.json();
                                const token = json.token;
                                localStorage.setItem('token', token);
                                if (token) {
                                    console.log('Token exists:', token);
                                    setAuthenticated(true)
                                    navigate('/');
                                } else {
                                    console.log('Token does not exist');
                                }


                            } else {
                                const errData = await res.json();
                                alert(errData.msg)
                            }

                        }).catch(error => {
                            console.error("Error:", error);
                            //alert("An error occurred. Please try again later.");
                        });
                }}>Sign In</button>



            </div></div>
        <Footer /></div>
}