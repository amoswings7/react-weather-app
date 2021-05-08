import './App.css';
import Navbar from './components/NavBar'
import Welcome from './components/Welcome'
import Current_weather from './components/Curent_weather'
import Forecast from './components/Forecast'
import { useEffect, useState } from 'react';

function App() {
  const [city_name,setCity_name] = useState(null);
  const [current_weather_data,setCurrent_weather_data] = useState(null);
  const [forecast_data,setForecast_data] =useState([]);
  const [units,setUnits] = useState('metric');
  let [display,setDisplay] =useState(false);
  let [loading,setLoading] = useState(false);

  useEffect(()=>{
    if(city_name ===null)return;
    setLoading(true)
    const passcodekey = 'appid'
    const password = '7bd717dc76c91a0893bd61ca2da801e2'
    fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city_name}&${passcodekey}=${password}&units=${units}`).then(res =>{
      if(!res.ok){
        alert('oops sorry your city wasn\'t found please enter a valid city name');
        return false
      }else{
        return res.json()
      }  
    }).then(res => {
       if(res === false){
         return
       }else{
        setCurrent_weather_data(res)
       }
    }).catch(err =>{
      console.log(err)
    })

    fetch(`http://api.openweathermap.org/data/2.5/forecast?q=${city_name}&mode=json&${passcodekey}=${password}&units=${units}`).then(res=>{
      if(!res.ok){
        alert('oops sorry your city wasn\'t found please enter a valid city name');
        return false
      }else{
        return res.json()
      }  
    }).then(res => {
      if(res === false){
        setDisplay(false)
        setLoading(false);
        return
      }else{
        const forecastData = res.list.filter(date =>{
          return new Date(date.dt_txt).getDay === new Date().getDay() || new Date(date.dt_txt).getHours() ===0
        })
        setForecast_data(forecastData);
        setDisplay(true)
      }
    }).catch(err =>{
      console.log(err)
    })
    return

  },[city_name,units])

  return (
    <div className="App">
     <Navbar setCity_name={setCity_name} setUnits={setUnits}/>
     <Welcome/>
     {!display  && (<div id='no-city'><h3>{loading?'loading please wait...':'Please enter a city to display your weather'}</h3></div>)}
     {display && <Current_weather current_weather_data={current_weather_data} units={units} setUnits={setUnits}/>}
     {display &&  <Forecast forecast_data={forecast_data} units={units}/>}
    </div>
  );
}

export default App;
