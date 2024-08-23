import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar.tsx';

function Root() {
    return (
        <div className="container mx-auto p-6 md:p-8 overflow-hidden">
            <div className="flex flex-col border-2 rounded-md h-[80vh] sm:max-h-[90vh] md:max-h-[80vh]">
                <Navbar />
                <Outlet />
            </div>
        </div>
    );
}

export default Root;
