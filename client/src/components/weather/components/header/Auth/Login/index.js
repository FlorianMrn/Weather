import React, { useState } from 'react';

export const Login = ({loginAuth, loadingAuth}) => {

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const handleChange = (e) => {
        if (e.target.name === "username") {
            setUsername(e.target.value);
        } else {
            setPassword(e.target.value);
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (password !== "" && username !== "") {
            const userData = {
                username,
                password
            };

            loginAuth(userData);
            loadingAuth();
        } else {
            return;
        }
    }

    return (
        <article className="w-full animate-scale">
            <form className="flex flex-col" onSubmit={handleSubmit}>
                <label htmlFor="username">Nom d'utilisateur</label>
                <input type="text" name="username" required autoComplete="off" onChange={handleChange} value={username} className="mb-4 bg-gray-400 p-2 outline-none"/>
                <label htmlFor="password">Mot de passe</label>
                <input type="password" name="password" onChange={handleChange} value={password} className="mb-4 bg-gray-400 p-2 outline-none"/>
                <button className="rounded p-1 text-white bg-black hover:bg-orange-600 p-2">Valider</button>
            </form>
        </article>
    );
};