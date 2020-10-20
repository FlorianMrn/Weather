import * as React from 'react';

const ForecastMain = ({ infos }) => {

    const date = infos.list[0].dt_txt.slice(0, 10).split('-').reverse().join('/');
    const NextHoursData =  infos.list.slice(0, 5);
    const nextDaysData = infos.list.slice(5);

    return (
        <section className="h-calc w-full bg-white pt-12 sm:px-2 lg:px-5 relative overflow-hidden">
            <article className="w-full px-2">
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
            <article className="w-full h-full overflow-y-scroll flex flex-col px-1">
                    {nextDaysData.map((next, index) => {
                        const startDay = parseInt(next.dt_txt.slice(10).split(':').slice(0, 1).join(''));
                        return (
                            <div className="w-full h-20 flex justify-between items-center border-t-2 py-3" key={next.dt}>
                                <div className ="flex flex-col justify-center items-center">
                                    <p className={(startDay === 0 || index === 0) ? "font-bold" : ""}>{next.dt_txt.slice(5, 10).split('-').reverse().join('/')}</p>
                                    <p className="italic text-orange-500">{next.dt_txt.slice(10).split(':').slice(0, 2).join(':')}</p>
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