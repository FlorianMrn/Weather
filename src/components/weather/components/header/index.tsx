import React from 'react';
import { FaSearch } from "react-icons/fa";

type headerProps = {
    value: string,
    getValue: Function,
    sendRequestPixa: Function,
    sendRequestOpen: Function
}

const Header = ({value, getValue, sendRequestPixa, sendRequestOpen}: headerProps) => {

    const handleChange = (e: any) => {
       getValue(e.target.value);
    }

    const handleSubmit = (e: any) => {
        return (
            e.preventDefault(),
            sendRequestPixa(),
            sendRequestOpen()
        )
    }

    return (
        <header className="w-full h-12 p-4 flex justify-center items-center">
            <form onSubmit={handleSubmit} className="w-full h-12 p-4 flex justify-center items-center" >
                <input type="text" className="mr-4" value={value} onChange={handleChange} />
                <FaSearch className="h-full text-white cursor-pointer" onClick={handleSubmit}/>
            </form>
        </header>
    );
};

export default Header;