import React from 'react';

const Pane = ({ side, children }) => {
    let styles = 'h-full select-none';
    if (side === 'left') {
        styles += ' py-4 md:py-8 px-12 md:pl16 md:pr-0 mt-2 basis-1/4';
    } else {
        styles +=
            ' pt-4 md:pt-8 px-8 md:px-16 basis-3/4 overflow-y-auto overscroll-none scroll-smooth';
    }
    return <div className={styles}>{children}</div>;
};

export default Pane;
