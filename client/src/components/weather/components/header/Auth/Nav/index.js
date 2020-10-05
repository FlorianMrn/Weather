import React from 'react';

// Component
import { Login } from '../Login';
import { Register } from '../Register';

export const Nav = () => {

    return (
        <header className="h-full w-full">
            <div className="w-full h-8 flex flex-row-reverse">
                <button className="rounded p-1 bg-orange-600 ml-3 text-white  outline-none">Login</button>
                <button className="rounded p-1 bg-gray-500 text-white  outline-none">Register</button>
            </div>
            <div className="w-full h-40 flex items-center justify-center mt-16">
                <Login />
            </div>
        </header>
    );
};