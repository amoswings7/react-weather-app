import React from 'react';
import Day from './Day'

const Forecast = ({forecast_data,units}) => {
    return ( 
        <div className='forecast'>
            <h2>Five day forecast </h2>
            <div className='grid'>
                {forecast_data.map(date =>(
                    <Day key ={date.weather[0].id*Math.random()} day={date} units={units}/>
                ))}
            </div>
        </div>
     );
}
 
export default Forecast;