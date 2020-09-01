import React from 'react';
import { FaSearch } from "react-icons/fa";

type headerProps = {
    value: string,
    getValue: Function
}

const Header = ({value, getValue}: headerProps) => {

    const handleChange = (e: any) => {
       getValue(e.target.value);
    }

    return (
        <header className="w-full h-15 p-4 flex justify-center items-center bg-purple-900">
            <input type="text" className="mr-4" value={value} onChange={handleChange}/>
            <FaSearch className="h-full text-white cursor-pointer" />
        </header>
    );
};

export default Header;