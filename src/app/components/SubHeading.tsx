import React from 'react';

const SubHeading = ({ children }) => {
    return (
        <h2 className="font-mono text-base md:text-lg text-lime-700 contrast-more:text-lime-900 font-semibold border-dotted border-b border-med-green mb-2">
            {children}
        </h2>
    );
};

export default SubHeading;
