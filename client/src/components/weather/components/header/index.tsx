import React from 'react';
import { FaSearch, FaSave } from "react-icons/fa";

// Components
import { Burger } from './Burger';

type headerProps = {
    value: string,
    getValue: Function,
    sendRequestPixa: Function,
    sendRequestOpen: Function,
    loading: Function,
    isAuthenticated: Boolean,
    saveFav: Function
}

const Header = ({value, getValue, sendRequestPixa, sendRequestOpen, loading, isAuthenticated, saveFav}: headerProps) => {

    const handleChange = (e: any) => {
       getValue(e.target.value);
    };

    const handleSubmit = (e: any) => {
        return (
            e.preventDefault(),
            sendRequestPixa(),
            sendRequestOpen(),
            loading()
        )
    };

    const handleSave = (e:any) => {
        return (
            saveFav(value)
        )
    };

    return (
        <header className="w-3/4 lg:w-2/4 h-12 p-4 flex justify-between items-center relative z-10">
            <Burger />
            <form onSubmit={handleSubmit} className="w-auto h-12 p-4 flex justify-center items-center" >
                <input type="text" className="mr-4 focus:bg-orange-600 outline-none rounded p-1" value={value} onChange={handleChange} />
                <FaSearch className="h-full text-white cursor-pointer mr-2 hover:text-orange-600" onClick={handleSubmit}/>
                {isAuthenticated && <FaSave className="h-full text-white cursor-pointer hover:text-orange-600" onClick={handleSave}/>}
            </form>
        </header>
    );
};

export default Header;