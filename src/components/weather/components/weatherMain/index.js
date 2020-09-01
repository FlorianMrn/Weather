import * as React from 'react';

const WeatherMain = ({ infos }) => {

    console.log(infos.default.city);

    return (
        <main className="w-full object-cover h-auto z-1 relative">
            <img className="-z-2 w-full object-cover h-89" src="https://images.unsplash.com/photo-1501594907352-04cda38ebc29?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80" alt="city" />
        </main>
    );
};

export default WeatherMain;