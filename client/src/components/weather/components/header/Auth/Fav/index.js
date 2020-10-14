import React, {useEffect} from 'react';
import { FaTimes, FaSave } from "react-icons/fa";

export const Fav = ({favs, sendDeleteData, getFavs, getValue, sendRequestPixa, sendRequestOpen, load}) => {


    useEffect(
       getFavs
    , []);

    const handleClick = (name) => {
        getValue(name);
        sendRequestPixa();
        sendRequestOpen();
        load();
    };

    const handleDelete = (id) => {
        sendDeleteData(id);
    }
    
    return (
        <main>
            {favs.length > 0 ?
            <>
                {favs.map(({name, id}) => (
                <div className="max-w-sm w-56 p-6 h-12 mb-4 flex shadow-lg flex justify-between rounded items-center bg-gradient-to-tr from-orange-600 to-yellow-400 text-white relative"  key={id}>
                    <p className="cursor-pointer font-bold text-xl h-12 w-full outline-none" onClick={() => handleClick(name)}>{name}</p>
                    <FaTimes className="cursor-pointer absolute top-0 right-0 text-lg" onClick={() => handleDelete(id)}/>
                </div>
            ))}
            </>
            : 
            <div className="w-full p-2 flex flex-wrap">
                <p>Aucun ville enregistrée, utilisez l'icône <FaSave/> pour enregistrer vos villes favorites</p>
            </div>
            }
        </main>
    );
};
