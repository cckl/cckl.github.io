import React from 'react';
import { Link } from 'react-router-dom';

function Error() {
    return (
        <div className="container mx-auto p-8 m-8 flex flex-col border-2 justify-center content-center items-center rounded-md browser-window">
            <span className="text-4xl p-2 animate-bounce">(இ﹏இ`｡)</span>
            <span className="text-lg">
                Oh no! You tried to access an invalid page.
            </span>
            <span className="text-lg">
                How about going{' '}
                <Link
                    to="/"
                    className="font-normal underline decoration-wavy text-mushroom"
                >
                    home
                </Link>
                ?
            </span>
        </div>
    );
}

export default Error;
