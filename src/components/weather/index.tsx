import React from 'react';

// Import
import HeaderContainer from '../../redux/containers/headerContainer';
import WeatherContainer from '../../redux/containers/weatherMainContainer';
import WeatherNav from '../../components/weather/components/weatherNav';

const Weather =  () => {
    return (
        <div className ="max-w-screen-lg h-screen m-auto relative">
            <HeaderContainer />
            <WeatherContainer/>
            <WeatherNav />
        </div>
    )
};

export default Weather;