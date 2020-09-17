import React, {useEffect} from 'react';
import {
    Switch,
    Route
  } from "react-router-dom";

// Import
import HeaderContainer from '../../redux/containers/headerContainer';
import WeatherContainer from '../../redux/containers/weatherMainContainer';
import WeatherNav from '../../components/weather/components/weatherNav';
import ForecastContainer from '../../redux/containers/ForecastContainer';

const Weather = ({photo, sendRequestOpen, sendRequestPixa}:any) => {

    useEffect(() => {
        sendRequestOpen();
        sendRequestPixa();
    }, [sendRequestOpen, sendRequestPixa]);

    return (
        <div className ="max-w-screen-lg h-screen m-auto relative bg-cover bg-center bg-no-repeat" style={{ backgroundImage: `url(${photo})`}}>
            <HeaderContainer />
                <Switch>
                    <Route exact path="/">
                        <WeatherContainer />
                    </Route>
                    <Route exact path="/prévisions">
                        <ForecastContainer />
                    </Route>
                </Switch>
            <WeatherNav />
            <script async defer src={`https://maps.googleapis.com/maps/api/js?key=${process.env.REACT_APP_GOOGLE}&libraries=places`}></script>
        </div>
    )
};

export default Weather;