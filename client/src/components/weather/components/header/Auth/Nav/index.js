import React, { useState } from 'react';

// Component
import { Login } from '../Login';
import { Register } from '../Register';

export const Nav = () => {

    const [login, setLogin] = useState(true);
    const [register, setRegister] = useState(false);

    const handleClick = (e) => {
        if (e.target.name === "register") {
            setLogin(false);
            setRegister(true);
        } else if (e.target.name === "login") {
            setLogin(true);
            setRegister(false);
        } else {
            return;
        }
    };

    return (
        <header className="h-full w-full">
            <div className="w-full h-8 flex flex-row-reverse">
                <button className={`rounded p-1 ${login ? "bg-orange-600" : "bg-gray-500"} ml-3 text-white outline-none`} name="login" onClick={handleClick}>Connexion</button>
                <button className={`rounded p-1 ${register ? "bg-orange-600" : "bg-gray-500"} text-white outline-none`} name="register" onClick={handleClick}>Inscription</button>
            </div>
            <div className="w-full h-64 flex items-center justify-center mt-16">
                {login && <Login /> }
                {register && <Register /> }
            </div>
        </header>
    );
};