import React, { useState } from 'react';

export const Nav = () => {

    const [display, setDisplay] = useState(false);

    return (
        <>
            <nav className="w-8 h-6 flex flex-col justify-between cursor-pointer z-10 relative" onClick={() => setDisplay(display ? false : true)}>
                <span className="w-8 h-1 bg-orange-600 rounded"></span>
                <span className="w-8 h-1 bg-orange-600 rounded"></span>
                <span className="w-8 h-1 bg-orange-600 rounded"></span>
            </nav>
            {display && <div className="z-1 absolute h-screen left-0 top-0 bg-white animate-scale"></div> }
        </>
    )
};