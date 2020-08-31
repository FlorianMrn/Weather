import React from 'react';
import { FaSearch } from "react-icons/fa";

const Header = () => {

    return (
        <header className="w-full h-15 p-4 flex justify-center items-center">
            <input type="text" className="mr-4" />
            <FaSearch className="h-full text-white cursor-pointer" />
        </header>
    );
};

export default Header;