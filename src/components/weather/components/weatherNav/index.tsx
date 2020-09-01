import * as React from 'react';
import { WiDaySunny, WiEarthquake } from "react-icons/wi";


const WeatherNav = () => {

    return (
        <nav className="w-full h-12 bg-white z-1 bottom-0 flex justify-around absolute box-border">
            <div className="relative flex justify-center flex-col items-center cursor-pointer box-border">
                <WiDaySunny/>
                <div className="text-black">Méteo</div>
            </div>
            <div className="relative flex justify-center flex-col items-center cursor-pointer box-border">
                <WiEarthquake/>
                <div className="text-black">Prévisions</div>
            </div>
        </nav>

    );
};

export default WeatherNav;