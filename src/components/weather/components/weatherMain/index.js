import * as React from 'react';

const WeatherMain = ({ infos }) => {

    console.log(infos.default.list[0].main.humidity);

    return (
        <main className="w-full bg-cover bg-center relative flex flex-col justify-around align-center bg-gray-900 bg-no-repeat" style={{ backgroundImage: `url(https://images.unsplash.com/photo-1501594907352-04cda38ebc29?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80)`}}>
            <div className="w-auto h-auto h-auto text-6xl relative text-center">{infos.default.list[0].main.temp}°</div>
            <div className="w-full h-6 relative">

            </div>
        </main>
    );
};

export default WeatherMain;