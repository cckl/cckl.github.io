import React from 'react';

const Pane = ({ side, children }) => {
    if (side === 'left') {
        return (
            <div className="sm:max-h-[42rem] select-none py-4 md:py-8 px-12 md:pl16 md:pr-0 mt-2 basis-1/4 sticky">
                {children}
            </div>
        );
    }
    // make only right container scrollable
    return (
        <div className="select-none pt-4 md:pt-8 px-8 md:px-16 basis-3/4 overflow-y-auto overscroll-none scroll-smooth">
            {children}
        </div>
    );
};

export default Pane;
