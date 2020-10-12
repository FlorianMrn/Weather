import React from 'react';
import { FaTimes, FaSave } from "react-icons/fa";

export const Fav = ({favs, deleteFav}) => {

    return (
        <main>
            {favs.length > 0 ?
            <>
                {favs.map((fav, index) => (
                <div className="max-w-sm w-56 p-6 h-24 flex shadow-lg flex justify-between rounded items-center bg-gradient-to-tr from-orange-600 to-yellow-400 text-white relative" key={index}>
                    <p className="font-bold text-xl">{fav}</p>
                    <FaTimes className="cursor-pointer absolute top-0 right-0 text-lg" onClick={() => deleteFav(index)}/>
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