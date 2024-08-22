import React from 'react';

function DiamondBullet() {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="12"
            height="12"
            viewBox="0 0 24 24"
            className="mr-2 mt-1.5 flex-none"
        >
            <path
                fill="rgb(221, 208, 192)"
                stroke="#8f7250"
                stroke-width="0.75"
                d="m12 0 12 12-12 12L0 12z"
            ></path>
        </svg>
    );
}

export default DiamondBullet;
