import React, {useEffect} from 'react';
import { FaTimes, FaSave } from "react-icons/fa";

export const Fav = ({favs, deleteFav, getFavs, getValue, sendRequestPixa, sendRequestOpen, load}) => {


    useEffect(
       getFavs
    , []);

    const handleClick = (e) => {
        const name = e.target.id;
        console.log(name)
        getValue(name);
        sendRequestPixa();
        sendRequestOpen();
        load();
    };
    
    return (
        <main>
            {favs.length > 0 ?
            <>
                {favs.map(({name, id}) => (
                <div className="max-w-sm w-56 p-6 h-12 mb-4 flex shadow-lg flex justify-between rounded items-center bg-gradient-to-tr from-orange-600 to-yellow-400 text-white relative cursor-pointer" id={name} key={id} onClick={handleClick}>
                    <p className="font-bold text-xl pointer-events-none">{name}</p>
                    <FaTimes className="cursor-pointer absolute top-0 right-0 text-lg" onClick={() => deleteFav(id)}/>
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
