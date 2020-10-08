import React, { useState } from 'react';

export const Register = ({registerAuth, history, loadingAuth, message, errorsAuth}) => {

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [password2, setPassword2] = useState("");
    const [errors, setErrors] = useState({
        username: '',
        password: '',
        password2: ''
    });
    const [err, setErrorAuth] = useState(errorsAuth.username);

    const handleChange = (e) => {

        const { name, value } = e.target;
        const regex = RegExp(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}/i);
        let error = null;
        // Reset err following register
        setErrorAuth("");

        switch (name) {
            case 'username':
                setUsername(value);
                error = 
                    value.length < 3 || value === ""
                    ? 'Username must be 3 characters'
                    : '';
                break;

            case 'password':
                setPassword(value);
                error =
                (!regex.test(value))
                ? '8 caractères minimum, avec au moins une majuscule et un chiffre'
                : '';
                break;

            case 'password2':
                setPassword2(value);
                error =
                value !== password || (!regex.test(value))
                ? 'Les mots de passes doivent correspondre'
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

        if (valid) {
            const newUser = {
                username : username,
                password : password,
            };

            loadingAuth();
            registerAuth(newUser);
        }
    };

    return (
        <article className="w-full animate-scale">
            <form onSubmit={handleSubmit} noValidate className="flex flex-col">
                <label htmlFor="username">Nom d'utilisateur</label>
                <input type="text" name="username" required autoComplete="off" pattern="[A-Za-z]{3}" onChange={handleChange} value={username} className="mb-4 bg-gray-400 p-2 outline-none"/>
                {errors.username.length > 0 &&  <span className='text-sm text-red-400 -mt-4 mb-4'>{errors.username}</span>}
                <label htmlFor="password">Mot de passe</label>
                <input type="password" name="password" pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}" onChange={handleChange} value={password} className="mb-4 bg-gray-400 p-2 outline-none"/>
                {errors.password.length > 0 &&  <span className='text-sm text-red-400 -mt-4 mb-4'>{errors.password}</span>}
                <label htmlFor="password2">Confirmer mot de passe</label>
                <input type="password" name="password2" pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}" onChange={handleChange} value={password2} className="mb-4 bg-gray-400 p-2 outline-none"/>
                {errors.password2.length > 0 &&  <span className='text-sm text-red-400 -mt-4 mb-4'>{errors.password2}</span>}
                <button className="rounded p-1 text-white bg-black hover:bg-orange-600 p-2">Valider</button>
            </form>
            {message && <p className="mt-2 font-bold text-green-400 text-center">{message}</p>}
            {err && handleChange && <p className="mt-2 font-bold text-red-400 text-center">{err}</p>}
        </article>
    );
};

