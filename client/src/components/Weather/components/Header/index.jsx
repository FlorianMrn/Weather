import React, {useState, useRef} from 'react';
import { FaSearch, FaSave } from "react-icons/fa";
import useOutsideClick from "../../../../utils/useOutsideClick";
import Autocomplete from 'react-google-autocomplete';

// Components
import { Burger } from './Burger';

const Header = ({value, getValue, sendRequestPixa, sendRequestOpen, loading, isAuthenticated, saveFav, favs}) => {

    const [error, setError] = useState("");
    const [success, setSuccess] = useState("");
    const REF = useRef();

    const handleChange = (e) => {
        return (
            getValue(e.target.value)
        )
    };

    const handleSubmit = (e) => {

        e.preventDefault();

        if (value === "") {
            return setError("Ville requise");
        } else {
            return (
                e.preventDefault(),
                sendRequestPixa(),
                sendRequestOpen(),
                loading()
            )
        }
    };

    const handleSave = (e) => {
        setSuccess("");

        if(favs.find((el) => el.name === value)) {
            setError("Ville déjà enregistrée");
        } else if(value === "") {
            setError("Ville requise");
        } else if (value !== "") {
            saveFav();
            setSuccess("Ville enregistrée")
        }
    };

    useOutsideClick(REF, () => {
        setError("");
        setSuccess("");
    });
    

    return (
        <header className="w-3/4 lg:w-2/4 h-12 p-4 flex justify-between items-center z-10 relative" ref={REF}>
            <Burger />
            <form onSubmit={handleSubmit} className="w-auto h-auto p-4 flex justify-center items-center" >
                <Autocomplete
                    style={{width: '90%'}}
                    value={value}
                    onChange={handleChange}
                    onPlaceSelected={(place) => {
                    if (value !== "") {
                    getValue(place.address_components[0].long_name);
                    }
                    else return;
                    }}
                    types={['(cities)']}
                />
                <FaSearch className="h-full text-white cursor-pointer ml-2 mr-2 hover:text-orange-600" onClick={handleSubmit}/>
                {isAuthenticated && <FaSave className="h-full text-white cursor-pointer hover:text-orange-600" onClick={handleSave}/>}
            </form>
            {error && 
            <p className="pt-2 font-bold text-red-400 text-center absolute bottom-0 right-0 top-0 transform translate-y-8">{error}</p>}
            {success && 
            <p className="pt-2 font-bold text-green-400 text-center absolute bottom-0 right-0 top-0 transform translate-y-8">{success}</p>}
        </header>
    );
};

export default Header;