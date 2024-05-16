import React from "react";
import { Navbar } from '../Navbar/Navbar'
import { Outlet } from 'react-router-dom';
import { Footer } from "../Footer/Footer";


export function Layout() {
    return (
        <div>

            <Navbar />
            <Outlet />
            <Footer />
        </div>
    )
}