import * as React from 'react';

const WeatherMain = ({ infos }) => {

    console.log(infos.default.list[0].main.humidity);

    return (
        <main className="w-full h-calc relative flex flex-col justify-around align-center">
            <div className="w-auto h-auto h-auto text-6xl relative text-center">{infos.default.list[0].main.temp}°</div>
            <div className="w-full h-6 relative">

            </div>
        </main>
    );
};

export default WeatherMain;