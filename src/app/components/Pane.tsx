import React from 'react';

const Pane = ({ side, children, leftWeight = '1/2', rightWeight = '1/2' }) => {
    if (side === 'left') {
        return (
            <section
                className={`basis-${leftWeight} select-none py-4 md:py-8 px-4 md:px-16 mt-2 max-h-[42rem] `}
            >
                {children}
            </section>
        );
    }
    // make only right container scrollable
    return (
        <section
            className={`basis-${rightWeight} select-none pt-4 md:pt-8 px-8 md:pr-16 md:pl-0 overflow-y-auto overscroll-none scroll-smooth`}
        >
            {children}
        </section>
    );
};

export default Pane;
