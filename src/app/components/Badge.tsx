import React from 'react';

function Badge({ children }) {
    return (
        <p className="text-sm border rounded-md border-mushroom  bg-lighter-mushroom p-2">
            {children}
        </p>
    );
}

export default Badge;
