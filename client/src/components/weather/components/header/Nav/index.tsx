import * as React from 'react';

export const Nav = () => {

    return (
        <>
            <nav className="w-8 h-6 flex flex-col justify-between cursor-pointer z-10 relative">
                <span className="w-8 h-1 bg-orange-600 rounded focus:bg-blue-700"></span>
                <span className="w-8 h-1 bg-orange-600 rounded focus:bg-blue-700"></span>
                <span className="w-8 h-1 bg-orange-600 rounded focus:bg-blue-700"></span>
            </nav>
            <div className="z-1 absolute w-full h-screen left-0 top-0 bg-white"></div>
        </>
    )
};