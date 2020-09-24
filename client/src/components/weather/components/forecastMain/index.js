import * as React from 'react';

const ForecastMain = ({ infos }) => {

    const date = infos.list[0].dt_txt.slice(0, 10).split('-').reverse().join('-');
    const NextHoursData =  infos.list.slice(0, 5);
    const nextDaysData = infos.list.slice(5);

    return (
        <section className="h-calc w-full bg-white pt-12 px-5 relative overflow-hidden">
            <article className="w-full">
                <div className="flex justify-between mb-6 font-bold">
                    <p>Aujourd'hui</p>
                    <p>{date}</p>
                </div>
                <div className="flex justify-between mb-8">
                    {NextHoursData.map((next) => {
                        return (
                            <div className="flex flex-col text-center" key={next.dt}>
                                <p>{Math.trunc(next.main.temp)}°</p>
                                <img src={`http://openweathermap.org/img/wn/${next.weather[0].icon}@2x.png`} alt="weather" className="object-cover"/>
                                <p className="italic">{next.dt_txt.slice(10).split(':').slice(0, 2).join(':')}</p>
                            </div>
                        )
                    })}
                </div>
            </article>
            <article className="w-full h-full overflow-y-scroll flex flex-col p-3">
                    {nextDaysData.map((next) => {
                        return (
                            <div className="w-full h-20 my-2 flex justify-between border-b-2 pb-2" key={next.dt}>
                                <div className ="flex flex-col justify-center items-center">
                                    <p className="font-bold">{next.dt_txt.slice(0, 10).split('-').reverse().join('-')}</p>
                                    <p className="italic">{next.dt_txt.slice(10).split(':').slice(0, 2).join(':')}</p>
                                </div>
                                <div className="box-border h-12 w-48 flex justify-center items-center">
                                    <img src={`http://openweathermap.org/img/wn/${next.weather[0].icon}@2x.png`} alt="weather" className="h12 w-12"/>
                                    <p>{next.weather[0].description}</p>
                                </div>
                                <p className="font-bold flex justify-center items-center">{Math.trunc(next.main.temp_max)}° max</p>
                                <p className="flex justify-center items-center">{Math.trunc(next.main.feels_like)}° ressentis</p>
                            </div>
                        )
                    })}
            </article>
        </section>
    );
};

export default ForecastMain;