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
        const regex = RegExp(/([A-Z0-9a-z])\w+/g);

        switch (name) {
            case 'username':
                setUsername(value);
                errors.username = 
                    value.length < 3 
                    ? 'Username must be 3 characters'
                    : '';
                break;

            case 'password':
                setPassword(value);
                errors.password =
                value.length < 8 || !regex.test(value) 
                ? 'Password must be 8 characters, contains one uppercase and one number'
                : '';
                break;

            case 'password2':
                setPassword2(value);
                errors.password2 =
                value !== password
                ? 'Passwords must match'
                : '';
                break;
            default :
                break;
        }
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
        <article>
            <form onSubmit={handleSubmit} noValidate>
                <label htmlFor="username">Username</label>
                <input type="text" name="username" required autoComplete="off" onChange={handleChange} value={username}/>
                {errors.username.length > 0 &&  <span className='error'>{errors.username}</span>}
                <label htmlFor="password">Password</label>
                <input type="password" name="password" onChange={handleChange} value={password}/>
                {errors.password.length > 0 &&  <span className='error'>{errors.password}</span>}
                <label htmlFor="password2">Confirm password</label>
                <input type="password" name="password2" onChange={handleChange} value={password2}/>
                {errors.password2.length > 0 &&  <span className='error'>{errors.password2}</span>}
                <button>Valider</button>
            </form>
        </article>
    );
};

