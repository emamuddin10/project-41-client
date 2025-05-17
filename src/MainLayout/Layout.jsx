import React from 'react';
import Navbar from '../Shares/Navbar/Navbar';
import { Outlet } from 'react-router-dom';
import Footer from '../Shares/Footer/Footer';

const Layout = () => {
    return (
        <div>
            <Navbar></Navbar>
            <div className='bg-amber-300 min-h-[calc(100vh-350px)]'>
                <Outlet></Outlet>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Layout;