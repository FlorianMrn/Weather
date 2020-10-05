import React, { useState } from 'react';

export const Login = () => {

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const handleChange = (e) => {
        if (e.target.name === "username") {
            setUsername(e.target.value);
        } else {
            setPassword(e.target.value);
        }
    }

    return (
        <article className="w-full">
            <form className="flex flex-col">
                <label htmlFor="username">Username</label>
                <input type="text" name="username" required autoComplete="off" onChange={handleChange} value={username} className="mb-4 bg-gray-400"/>
                <label htmlFor="password">Password</label>
                <input type="password" name="password" onChange={handleChange} value={password} className="mb-4 bg-gray-400"/>
                <button className="rounded p-1 text-white bg-black">Valider</button>
            </form>
        </article>
    );
};