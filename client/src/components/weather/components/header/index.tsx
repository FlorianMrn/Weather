import React, {useState, useRef} from 'react';
import { FaSearch, FaSave } from "react-icons/fa";
import useOutsideClick from "../../../../utils/useOutsideClick";

// Components
import { Burger } from './Burger';

type headerProps = {
    value: string,
    getValue: Function,
    sendRequestPixa: Function,
    sendRequestOpen: Function,
    loading: Function,
    isAuthenticated: Boolean,
    saveFav: Function,
    favs: any
}

const Header = ({value, getValue, sendRequestPixa, sendRequestOpen, loading, isAuthenticated, saveFav, favs}: headerProps) => {

    const [error, setError] = useState("");
    const [success, setSuccess] = useState("");
    const ref = useRef();

    const handleChange = (e: any) => {
        setError("");
        setSuccess("");
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
        setSuccess("");

        if(favs.find((el: any) => el.name === value)) {
            setError("Ville déjà enregistrée");
        } else if(value === "") {
            setError("Ville requise");
        } else if (value !== "") {
            saveFav();
            setSuccess("Ville enregistrée")
        }
    };

    useOutsideClick(ref, () => {
        setError("");
        setSuccess("");
    });
    

    return (
        <header className="w-3/4 lg:w-2/4 h-12 p-4 flex justify-between items-center z-10 relative" ref={ref}>
            <Burger />
            <form onSubmit={handleSubmit} className="w-auto h-auto p-4 flex justify-center items-center" >
                <input type="text" className="mr-4 focus:bg-orange-600 outline-none rounded p-1" placeholder="Rechercher une ville.." value={value} onChange={handleChange} />
                <FaSearch className="h-full text-white cursor-pointer mr-2 hover:text-orange-600" onClick={handleSubmit}/>
                {isAuthenticated && <FaSave className="h-full text-white cursor-pointer hover:text-orange-600" onClick={handleSave}/>}
            </form>
            {error && <p className="pt-2 font-bold text-red-400 text-center absolute bottom-0 right-0 top-0 transform translate-y-8">{error}</p>}
            {success && <p className="pt-2 font-bold text-green-400 text-center absolute bottom-0 right-0 top-0 transform translate-y-8">{success}</p>}
        </header>
    );
};

export default Header;