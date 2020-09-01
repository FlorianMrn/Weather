import React from 'react';

// Import
import HeaderContainer from '../../redux/containers/headerContainer';
import WeatherContainer from '../../redux/containers/weatherMainContainer';
import WeatherNav from '../../components/weather/components/weatherNav';

const Weather =  () => {
    return (
        <div className ="max-w-screen-lg h-screen m-auto relative bg-cover bg-center bg-no-repeat" style={{ backgroundImage: `url(https://images.unsplash.com/photo-1501594907352-04cda38ebc29?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80)`}}>
            <HeaderContainer />
            <WeatherContainer/>
            <WeatherNav />
        </div>
    )
};

export default Weather;