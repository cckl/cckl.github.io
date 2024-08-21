import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
    return (
        <div className="border-4">
        <Link className="underline px-4 text-lime-800" to="/">Home</Link>
        <Link className="underline px-4 text-lime-800" to="/about">About</Link>
        <Link className="underline px-4 text-lime-800" to="/projects">Projects</Link>
        </div>
    )
}

export default Navbar;