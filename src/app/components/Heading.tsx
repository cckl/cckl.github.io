import React from 'react';

const Heading = ({ children }) => {
    return (
        <h1 className="font-anonymousPro text-2xl text-lime-700 font-extrabold">
            {children}
        </h1>
    );
};

export default Heading;
