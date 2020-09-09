import React from 'react';
import {
    Switch,
    Route
  } from "react-router-dom";

// Import
import HeaderContainer from '../../redux/containers/headerContainer';
import WeatherContainer from '../../redux/containers/weatherMainContainer';
import WeatherNav from '../../components/weather/components/weatherNav';

const Weather = ({photo}:any) => {

    return (
        <div className ="max-w-screen-lg h-screen m-auto relative bg-cover bg-center bg-no-repeat" style={{ backgroundImage: `url(${photo})`}}>
            <HeaderContainer />
                <Switch>
                    <Route exact path="/">
                        <WeatherContainer/>
                    </Route>
                </Switch>
            <WeatherNav />
            <script async defer src={`https://maps.googleapis.com/maps/api/js?key=${process.env.REACT_APP_GOOGLE}&libraries=places`}></script>
        </div>
    )
};

export default Weather;