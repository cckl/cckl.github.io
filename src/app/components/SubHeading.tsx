import React from 'react';

const SubHeading = ({ children }) => {
    return (
        <h2 className="font-mono text-lg text-lime-700 font-semibold border-dotted border-b border-med-green mb-2">
            {children}
        </h2>
    );
};

export default SubHeading;
