import React from 'react';


const Day = ({day,units}) => {

    const dateInfor = {
        name:()=>{
            let name = null;
            switch(new Date(day.dt_txt).getDay()){
                case 0:
                    name = 'Sunday'
                    break;
                case 1:
                    name = 'Monday'
                    break;
                case 2:
                    name = 'Tuesday'
                    break;
                case 3:
                    name = 'Wedsyday'
                    break;
                case 4:
                    name = 'Thursday'
                    break;
                case 5:
                    name = 'Friday'
                    break;
                case 6:
                    name = 'Saturday'
                    break;
                default:
                    name='monday'
            }
            return name;
        },
        temp:day.main.temp,
        description:day.weather[0].description,
        icon:day.weather[0].icon
    }

    return ( 
        <div className='days'>
            <h3 className='day'>{dateInfor.name()}</h3>
            <div className='image-area'>
               <img src={`http://openweathermap.org/img/w/${dateInfor.icon}.png`} alt='weather-icon'/>
            </div>
            <p>{dateInfor.description}</p>
            <h3 className='temp'>{dateInfor.temp}{units=='metric'?'°c':'°F'}</h3>
        </div>
     ); 
}
 
export default Day;