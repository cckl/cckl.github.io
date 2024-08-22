import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar.tsx';

function Root() {
    return (
        <div className="container mx-auto p-8 overflow-hidden">
            <div className="flex flex-col border-2 rounded-md browser-window">
                <Navbar />
                <Outlet />
            </div>
        </div>
    );
}

export default Root;
