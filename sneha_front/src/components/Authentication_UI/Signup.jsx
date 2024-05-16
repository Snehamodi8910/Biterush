import { useEffect, useState } from "react";
import './Signup.css';
import { useNavigate } from 'react-router-dom';
import { authenticate } from "../../Context/atom";
import { useSetRecoilState } from "recoil";
import { Footer } from "../Footer/Footer";
import { Link } from "react-router-dom";
import { assets } from "../../assets/assets";

export default function Signup() {
    const [email, setEmail] = useState('');
    const [password, setPass] = useState('');
    const setAuthenticated = useSetRecoilState(authenticate)
    const navigate = useNavigate();
    return (
        <div>
            <div className="signup-logo">
                <Link to='/'>
                    <img src={assets.logo} alt="" width={160} style={{ marginTop: '40px', marginLeft: '8%' }} />
                </Link>
            </div>
            
        <div className="signup_container">

            <div className="signup_form_container">
                <div className='sign-left'>
                    <h1>Welcome Back</h1>
                    <Link to="/Signin">
                        <br />
                        <button type="button" className='white_btn'>
                            Sign in
                        </button>
                    </Link>
                </div>

                <div className="sign-right">
                    <h1 style={{ color: 'gray' }}>Please, Sign-up to continue</h1>
                    <br />
                    <input
                        type="text"
                        placeholder="Email"
                        
                        style={{ padding: 10, margin: 9 }}
                        onChange={(event) => {
                            const value = event.target.value;
                            setEmail(value);
                        }}
                    /><br />
                    <input
                        type="text"
                        placeholder="Password"
                       
                        style={{ padding: 10, margin: 9 }}
                        onChange={(event) => {
                            const value = event.target.value;
                            setPass(value);
                        }}
                    /><br />
                    <button className="btn" onClick={async () => {
                        console.log("hello")
                        await fetch("http://localhost:3000/signup", {
                            method: "POST",
                            body: JSON.stringify({
                                email: email,
                                password: password
                            }),
                            headers: {
                                "Content-Type": "application/json"
                            }
                        }).then(async function (res) {
                            if (res.ok) {
                                const json = await res.json();
                                const token = json.token;
                                localStorage.setItem('token', token);
                                if (token) {
                                    console.log('Token exists:', token);
                                    setAuthenticated(true);
                                    navigate('/');
                                } else {
                                    console.log('Token does not exist');
                                }
                            } else {
                                const errData = await res.json();
                                alert(errData.msg);
                            }
                        });
                    }}>Sign Up</button>
                    <br />
                    <div className="redirect" style={{ color: 'gray' }}>Account already exists? <Link to="/signin" style={{ color: 'tomato' }}>Sign in</Link></div>
                </div>
            </div>
            <Footer />
        </div></div>
    );
}
