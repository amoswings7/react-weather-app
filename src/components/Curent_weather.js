import React from 'react'


const Current_weather = ({current_weather_data,units,setUnits}) => {
    const weather_infor = {
        icon : current_weather_data.weather[0].icon,
        description : current_weather_data.weather[0].description,
        temp : Math.round(current_weather_data.main.temp),
        feels_like : current_weather_data.main.feels_like,
        temp_max : current_weather_data.main.temp_max,
        temp_min : current_weather_data.main.temp_min,
        visibility : ()=>{
            if(current_weather_data.visibility >=4000 && current_weather_data.visibility < 10000 ){
                return `Not so bad (${current_weather_data.visibility/1000} km)`
            }else if(current_weather_data.visibility >= 10000 && current_weather_data.visibility <= 20000){
                return `Good (${current_weather_data.visibility/1000} km)`
            }else if(current_weather_data.visibility >20000){
                return `Excellent (${current_weather_data.visibility/1000} km)`
            }else{
                return `Not clear enough (${current_weather_data.visibility/1000} km)`
            }
        },
        name : current_weather_data.name,
        country : current_weather_data.sys.country,
        windspeed :()=>{
            if(units=='metric'){
                return (current_weather_data.wind.speed*3600/1000).toString()+' km/h';
            }else{
                return current_weather_data.wind.speed.toString()+' miles/hr'
            }
        }
    }



    return ( 
        <div className='current-weather'>
            <h2>Current weather</h2>
            <main>
                <aside className='left-aside'>
                    <h3>{`${weather_infor.name}, ${weather_infor.country}`}</h3>
                    <div className='temperature'>
                        <div>
                           <img src={`http://openweathermap.org/img/w/${weather_infor.icon}.png`} alt='weather-icon'/>
                        </div>
                        <h1>{weather_infor.temp}{units=='metric'?'°c':'°F'}</h1>
                    </div>
                    <p>{weather_infor.description}</p>
                </aside>

                <aside className='right-aside'>
                    <div><p className='name'>Feels like :</p><p className='results'>{weather_infor.feels_like}{units=='metric'?'°c':'°F'}</p></div>
                    <div><p className='name'>Max temp. :</p><p className='results'>{weather_infor.temp_max}{units=='metric'?'°c':'°F'}</p></div>
                    <div><p className='name'>Min temp. :</p><p className='results'>{weather_infor.temp_min}{units=='metric'?'°c':'°F'}</p></div>
                    <div><p className='name'>Wind speed :</p><p className='results'>{weather_infor.windspeed()}</p></div>
                    <div><p className='name'>Visibility :</p><p className='results'>{weather_infor.visibility()}</p></div>
                </aside>
            </main>
        </div>
     );
}
 
export default Current_weather;