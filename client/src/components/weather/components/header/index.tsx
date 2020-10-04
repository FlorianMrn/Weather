import React from 'react';
import { FaSearch } from "react-icons/fa";

// Components
import { Nav } from './Nav';

type headerProps = {
    value: string,
    getValue: Function,
    sendRequestPixa: Function,
    sendRequestOpen: Function,
    loading: Function
}

const Header = ({value, getValue, sendRequestPixa, sendRequestOpen, loading}: headerProps) => {

    const handleChange = (e: any) => {
       getValue(e.target.value);
    }

    const handleSubmit = (e: any) => {
        return (
            e.preventDefault(),
            sendRequestPixa(),
            sendRequestOpen(),
            loading()
        )
    }

    return (
        <header className="w-3/5 h-12 p-4 flex justify-between items-center relative z-10">
            <Nav />
            <form onSubmit={handleSubmit} className="w-auto h-12 p-4 flex justify-center items-center" >
                <input type="text" className="mr-4" value={value} onChange={handleChange} />
                <FaSearch className="h-full text-white cursor-pointer" onClick={handleSubmit}/>
            </form>
        </header>
    );
};

export default Header;