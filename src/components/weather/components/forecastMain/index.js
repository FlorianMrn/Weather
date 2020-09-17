import * as React from 'react';

const ForecastMain = ({ infos }) => {

    const date = infos.list[0].dt_txt.slice(0, 10).split('-').reverse().join('-');

    return (
        <section className="h-calc w-full bg-white pt-12">
            <article className="w-full h-24">
                <div className="flex justify-between">
                    <p>Aujourd'hui</p>
                    <p>{date}</p>
                </div>
            </article>
        </section>
    );
};

export default ForecastMain;