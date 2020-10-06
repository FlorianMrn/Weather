import * as React from 'react';
import { WiDaySunny, WiEarthquake } from "react-icons/wi";
import { NavLink } from "react-router-dom";


const WeatherNav = () => {

    const active={
        color: "#E15335"
    };

    return (
        <nav className="w-full h-12 bg-white z-1 bottom-0 flex justify-around absolute box-border bg-gray-100">
            <div className="relative flex justify-center flex-col items-center cursor-pointer box-border">
                <NavLink exact to="/" className="relative flex justify-center flex-col items-center cursor-pointer box-border" activeStyle={active}>
                    <WiDaySunny />
                    <div className="text-black">Météo</div>
                </NavLink>
            </div>
            <div className="relative flex justify-center flex-col items-center cursor-pointer box-border">
                <NavLink exact to="/prévisions" className="relative flex justify-center flex-col items-center cursor-pointer box-border" activeStyle={active}>
                    <WiEarthquake />
                    <div className="text-black">Prévisions</div>
                </NavLink>
            </div>
        </nav>

    );
};

export default WeatherNav;