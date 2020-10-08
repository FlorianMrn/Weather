import React, { useState } from 'react';

// Component
import { Login } from '../Login';
import { Register } from '../Register';

export const Nav = ({isAuthenticated, user, loading, errors, loadingAuth, registerAuth, loginAuth, message, errorsAuth}) => {

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
        {!loading ?
        <>
            <div className="w-full h-8 flex flex-row-reverse">
                <button className={`rounded p-1 ${login ? "bg-orange-600" : "bg-gray-500"} ml-3 text-white focus:outline-none`} name="login" onClick={handleClick}>Connexion</button>
                <button className={`rounded p-1 ${register ? "bg-orange-600" : "bg-gray-500"} text-white focus:outline-none`} name="register" onClick={handleClick}>Inscription</button>
            </div>
            <div className="w-full h-64 flex items-center justify-center mt-16">
                {login && <Login /> }
                {register && <Register registerAuth={registerAuth} loadingAuth={loadingAuth} message={message} errorsAuth={errorsAuth}/> }
            </div>
        </>
        :   <div className="h-full w-full flex flex-col justify-center items-center text-center">
                <div className="animate-spin w-32 h-32 rounded-full bg-gradient-to-r from-orange-400 via-red-500 to-pink-500"/>
                <p>Chargement...</p>
            </div>}
        </header>
    );
};