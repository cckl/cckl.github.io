import React from 'react';
import { Link } from 'react-router-dom';
import BrowserButton from './BrowserButton.tsx';

function Navbar() {
    return (
        <header className="py-2 pl-2 flex justify-between border-b-2">
            <div className="flex justify-around items-center w-14 md:w-20">
                <BrowserButton color="bg-dark-mushroom"></BrowserButton>
                <BrowserButton color="bg-mushroom"></BrowserButton>
                <BrowserButton color="bg-light-mushroom"></BrowserButton>
            </div>
            <nav className="text-right font-anonymousPro text-sm md:text-base select-none">
                <Link
                    className="px-1 md:px-4 text-lime-800 hover:underline"
                    to="/"
                >
                    home
                </Link>
                <Link
                    className="px-1 md:px-4 text-lime-800 hover:underline"
                    to="/about"
                >
                    about
                </Link>
                <Link
                    className="px-1 md:px-4 text-lime-800 hover:underline hover:translate-y-1"
                    to="/projects"
                >
                    projects
                </Link>
                <Link
                    className="px-1 md:px-4 text-lime-800 hover:underline hover:translate-y-1"
                    to="/contact"
                >
                    contact
                </Link>
            </nav>
        </header>
    );
}

export default Navbar;
