import React, { useState } from 'react';

// Component
import { Nav } from '../Auth/Nav';

export const Burger = () => {

    const [display, setDisplay] = useState(false);

    return (
        <>
            <nav className={`h-6 flex ${!display ? "flex-col w-10" : "flex-row w-6"} justify-between cursor-pointer z-10 relative `} onClick={() => setDisplay(display ? false : true)}>
                <span className={`${!display ? "w-8 h-1" : "w-1 h-6 rotate-180"} bg-orange-600 rounded transition-all duration-500 ease-in-out`}></span>
                <span className={`${!display ? "w-8 h-1" : "w-1 h-6 rotate-180"} bg-orange-600 rounded transition-all duration-500 ease-in-out`}></span>
                <span className={`${!display ? "w-8 h-1" : "w-1 h-6 rotate-180"} bg-orange-600 rounded transition-all duration-500 ease-in-out`}></span>
            </nav>
            {display && 
            <div className="z-1 absolute h-screen left-0 top-0 bg-white animate-scale p-4 w-56">
                <Nav />
            </div> 
            }
        </>
    )
};