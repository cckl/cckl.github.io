import React from 'react';
import Pane from './Pane.tsx';

const SplitScreen = ({ children, leftWeight = '1/2', rightWeight = '1/2' }) => {
    const [left, right] = children;
    return (
        <section className="container flex flex-col md:flex-row h-[90%]">
            <Pane side="left" leftWeight={leftWeight}>
                {left}
            </Pane>
            <Pane side="right" rightWeight={rightWeight}>
                {right}
            </Pane>
        </section>
    );
};

export default SplitScreen;
