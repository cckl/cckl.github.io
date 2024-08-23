import React from 'react';
import Pane from './Pane.tsx';

const SplitScreen = ({ children }) => {
    const [left, right] = children;
    return (
        <div className="container flex flex-col md:flex-row h-[85%] md:h-[90%]">
            <Pane side="left">{left}</Pane>
            <Pane side="right">{right}</Pane>
        </div>
    );
};

export default SplitScreen;
