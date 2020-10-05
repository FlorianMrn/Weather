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

const Weather = ({photo, sendRequestOpen, sendRequestPixa, isLoading }:any) => {

    useEffect(() => {
        sendRequestOpen();
        sendRequestPixa();
    }, [sendRequestOpen, sendRequestPixa]);

    return (
        <>
        {!isLoading ?
        <div className ="max-w-screen-lg h-screen m-auto relative bg-cover bg-center bg-no-repeat relative z-10">
            <img src={photo} alt="batiment" className="z-0 absolute min-w-full min-h-full object-cover"/>
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
        :   <div className="flex justify-center items-center max-w-screen-lg h-screen m-auto">
                <div className="animate-spin w-32 h-32 rounded-full bg-gradient-to-r from-orange-400 via-red-500 to-pink-500"/>
            </div>}
        </>
    )
};

export default Weather;