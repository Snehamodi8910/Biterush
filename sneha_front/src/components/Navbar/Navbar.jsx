import React, { useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import "./Navbar.css";
import { assets } from '../../assets/assets'
import { useState } from "react";
import { authenticate, totalcount } from "../../Context/atom";
import { useRecoilState } from "recoil";
import { useLocation } from "react-router-dom";//useLocation: Hook from react-router-dom for accessing the current location.
import { HashLink } from 'react-router-hash-link';
import { useRecoilValue } from "recoil";
import Badge from '@mui/material/Badge';
import { useNavigate } from "react-router-dom";





export function Navbar() {
    const navigate = useNavigate();
    const location = useLocation();//location.pathname is a property provided by the useLocation hook from react-router-dom. It represents the path of the current URL.
    const [auth, setAuthenticated] = useRecoilState(authenticate);
    const [menuvisible, setMenuvisible] = useState(location.pathname !== '/cart');
    const count = useRecoilValue(totalcount);
    const [onCart, setOncart] = useState(location.pathname !== '/cart');
    const [showSearchIcon, setShowSearchIcon] = useState(window.innerWidth > 400);

    useEffect(() => {
        const handleResize = () => {
            setShowSearchIcon(window.innerWidth > 400);
        };

        window.addEventListener('resize', handleResize);

        // Cleanup function to remove the event listener
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    useEffect(() => {
        setMenuvisible(location.pathname !== '/cart')
        setOncart(location.pathname !== '/cart')
    }, [location.pathname])

    return (
        <div className="Navbar">

            <Link to='/'><img src={assets.logo} alt="" width={160} style={{ marginTop: '10px', marginLeft: '10%' }} className="logo" />
            </Link>
            <ul className="navbar-menu">

                {menuvisible ? <li>
                    <HashLink to='#' >HOME</HashLink>
                </li> : <NavLink to='/'>HOME</NavLink>}
                {menuvisible ?
                    <li>
                        <HashLink smooth to='#menu' >MENU</HashLink>
                    </li> : null}
                <li>
                    <HashLink smooth to='#footer' >CONTACT-US</HashLink>
                </li>
            </ul>


            <div className="navbar-right">
                {showSearchIcon && (
                    <img src={assets.search_icon} alt="" />
                )}


                <div className="navbar-search-icon">
                    <Link to={auth ? '/cart' : '/signup'}>
                        <Badge badgeContent={count} className='dot' color='primary' >
                            <img src={assets.basket_icon} alt="" />
                        </ Badge >
                    </Link>
                    {/* <div className="dot">
                       {!count?<div></div>: <p>{count}</p>}
                    </div> */}
                </div>
                <ul>
                    <li>
                        {!auth ? <Link to="/signup" className="nav-btn"><button>Sign up</button></Link> : <div><button onClick={() => { setAuthenticated(false); localStorage.removeItem('token'); navigate('/') }}>Logout</button></div>}
                    </li>
                </ul>




            </div>

        </div>
    )
}
/*


HashLink is primarily used to create links with hash fragments in React applications. When you click on a HashLink, it navigates to a specific section of the page identified by the id attribute of an element with the corresponding hash fragment in the URL. */