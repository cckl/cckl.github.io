import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar.tsx';

function Root() {
    return (
        <div className="container mx-auto p-4 md:p-6 md:p-8 overflow-hidden">
            <div className="flex flex-col border-2 rounded-md h-[90vh] sm:max-h-[90vh] md:max-h-[80vh] overflow-clip">
                <Navbar />
                <main aria-live="polite">
                    <Outlet />
                </main>
            </div>
        </div>
    );
}

export default Root;
