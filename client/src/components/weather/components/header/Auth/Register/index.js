import React, { useState } from 'react';

export const Register = () => {

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [password2, setPassword2] = useState("");
    const [errors, setErrors] = useState({
        username: '',
        password: '',
        password2: ''
    })

    const handleChange = (e) => {

        const { name, value } = e.target;
        const regex = RegExp(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}/i);
        let error = null;

        switch (name) {
            case 'username':
                setUsername(value);
                error = 
                    value.length < 3
                    ? 'Username must be 3 characters'
                    : '';
                break;

            case 'password':
                setPassword(value);
                error =
                (value.length < 7) || (!regex.test(value))
                ? 'Password must contain at least 8 characters, one uppercase and one number'
                : '';
                break;

            case 'password2':
                setPassword2(value);
                error =
                value !== password || (!regex.test(value))
                ? 'Passwords must match'
                : '';
                break;
                
            default :
                break;
        };

        setErrors({...errors, [name]: error});

    };

    const handleSubmit = (e) => {

        e.preventDefault();

        let valid = true;

        Object.values(errors).forEach(
            (val) => val.length > 0 && (valid = false)
        );

        console.log("ok", valid);
    }

    return (
        <article className="w-full animate-scale">
            <form onSubmit={handleSubmit} noValidate className="flex flex-col">
                <label htmlFor="username">Username</label>
                <input type="text" name="username" required autoComplete="off" pattern="[A-Za-z]{3}" onChange={handleChange} value={username} className="mb-4 bg-gray-400"/>
                {errors.username.length > 0 &&  <span className='text-sm text-red-400 -mt-4 mb-4'>{errors.username}</span>}
                <label htmlFor="password">Password</label>
                <input type="password" name="password" pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}" onChange={handleChange} value={password} className="mb-4 bg-gray-400"/>
                {errors.password.length > 0 &&  <span className='text-sm text-red-400 -mt-4 mb-4'>{errors.password}</span>}
                <label htmlFor="password2">Confirm password</label>
                <input type="password" name="password2" pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}" onChange={handleChange} value={password2} className="mb-4 bg-gray-400"/>
                {errors.password2.length > 0 &&  <span className='text-sm text-red-400 -mt-4 mb-4'>{errors.password2}</span>}
                <button className="rounded p-1 text-white bg-black hover:bg-orange-600">Valider</button>
            </form>
        </article>
    );
};

