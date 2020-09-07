import React from 'react';
import { FaSearch } from "react-icons/fa";
import { sendRequestOpen } from '../../../../redux/actions';

type headerProps = {
    value: string,
    getValue: Function,
    sendRequestPixa: Function
}

const Header = ({value, getValue, sendRequestPixa}: headerProps) => {

    const handleChange = (e: any) => {
       getValue(e.target.value);
    }

    const handleSubmit = () => {
        return (
            sendRequestPixa()
        )
    }

    return (
        <header className="w-full h-12 p-4 flex justify-center items-center">
            <input type="text" className="mr-4" value={value} onChange={handleChange}/>
            <FaSearch className="h-full text-white cursor-pointer" onClick={handleSubmit}/>
        </header>
    );
};

export default Header;