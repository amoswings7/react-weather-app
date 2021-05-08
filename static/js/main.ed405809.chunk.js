(this["webpackJsonpreact-weather-center"]=this["webpackJsonpreact-weather-center"]||[]).push([[0],{10:function(e,t,a){},12:function(e,t,a){"use strict";a.r(t);var c=a(1),n=a.n(c),i=a(4),s=a.n(i),r=(a(9),a(2)),l=(a(10),a(0)),o=function(e){var t=e.setCity_name,a=e.setUnits,n=Object(c.useState)(""),i=Object(r.a)(n,2),s=i[0],o=i[1];return Object(l.jsxs)("nav",{className:"nav-bar",children:[Object(l.jsx)("div",{className:"nav-header",children:Object(l.jsx)("h1",{children:"My weather center app"})}),Object(l.jsxs)("div",{className:"nav-search-bar",children:[Object(l.jsx)("h3",{children:"Current weather and 5 day forecast"}),Object(l.jsxs)("select",{onChange:function(e){a(e.target.value)},children:[Object(l.jsx)("option",{value:"metric",children:"metric unit measurement"}),Object(l.jsx)("option",{value:"imperial",children:"imperial unit measurement"})]}),Object(l.jsxs)("div",{className:"input-area",children:[Object(l.jsx)("input",{onKeyUp:function(e){if(13===e.keyCode){if(0===s.length)return void alert("you cannot enter an empty filled please fill in the field to search");t(s)}},onChange:function(e){o(e.target.value)},type:"text",placeholder:"search for a city",required:!0}),Object(l.jsx)("button",{onClick:function(){0!==s.length?t(s):alert("you cannot enter an empty filled please fill in the field to search")},className:"input-btn",children:Object(l.jsx)("i",{className:"fas fa-arrow-right"})})]})]})]})},d=function(){return Object(l.jsx)("div",{className:"welcome",children:Object(l.jsx)("p",{children:"Welcome to your weather center app where you can get your location's current weather update right to your device either on your smart phone or desktop. We offer accurate weather data and we also offer 5 day forecast so you can make plans right away and beaware of what to expect on particular days.You can search for almost any city in the world and get the current weather in that city."})})},j=function(e){var t=e.current_weather_data,a=e.units,c=(e.setUnits,{icon:t.weather[0].icon,description:t.weather[0].description,temp:Math.round(t.main.temp),feels_like:t.main.feels_like,temp_max:t.main.temp_max,temp_min:t.main.temp_min,visibility:function(){return t.visibility>=4e3&&t.visibility<1e4?"Not so bad (".concat(t.visibility/1e3," km)"):t.visibility>=1e4&&t.visibility<=2e4?"Good (".concat(t.visibility/1e3," km)"):t.visibility>2e4?"Excellent (".concat(t.visibility/1e3," km)"):"Not clear enough (".concat(t.visibility/1e3," km)")},name:t.name,country:t.sys.country,windspeed:function(){return"metric"==a?(3600*t.wind.speed/1e3).toString()+" km/h":t.wind.speed.toString()+" miles/hr"}});return Object(l.jsxs)("div",{className:"current-weather",children:[Object(l.jsx)("h2",{children:"Current weather"}),Object(l.jsxs)("main",{children:[Object(l.jsxs)("aside",{className:"left-aside",children:[Object(l.jsx)("h3",{children:"".concat(c.name,", ").concat(c.country)}),Object(l.jsxs)("div",{className:"temperature",children:[Object(l.jsx)("div",{children:Object(l.jsx)("img",{src:"http://openweathermap.org/img/w/".concat(c.icon,".png"),alt:"weather-icon"})}),Object(l.jsxs)("h1",{children:[c.temp,"metric"==a?"\xb0c":"\xb0F"]})]}),Object(l.jsx)("p",{children:c.description})]}),Object(l.jsxs)("aside",{className:"right-aside",children:[Object(l.jsxs)("div",{children:[Object(l.jsx)("p",{className:"name",children:"Feels like :"}),Object(l.jsxs)("p",{className:"results",children:[c.feels_like,"metric"==a?"\xb0c":"\xb0F"]})]}),Object(l.jsxs)("div",{children:[Object(l.jsx)("p",{className:"name",children:"Max temp. :"}),Object(l.jsxs)("p",{className:"results",children:[c.temp_max,"metric"==a?"\xb0c":"\xb0F"]})]}),Object(l.jsxs)("div",{children:[Object(l.jsx)("p",{className:"name",children:"Min temp. :"}),Object(l.jsxs)("p",{className:"results",children:[c.temp_min,"metric"==a?"\xb0c":"\xb0F"]})]}),Object(l.jsxs)("div",{children:[Object(l.jsx)("p",{className:"name",children:"Wind speed :"}),Object(l.jsx)("p",{className:"results",children:c.windspeed()})]}),Object(l.jsxs)("div",{children:[Object(l.jsx)("p",{className:"name",children:"Visibility :"}),Object(l.jsx)("p",{className:"results",children:c.visibility()})]})]})]})]})},h=function(e){var t=e.day,a=e.units,c={name:function(){var e=null;switch(new Date(t.dt_txt).getDay()){case 0:e="Sunday";break;case 1:e="Monday";break;case 2:e="Tuesday";break;case 3:e="Wedsyday";break;case 4:e="Thursday";break;case 5:e="Friday";break;case 6:e="Saturday";break;default:e="monday"}return e},temp:t.main.temp,description:t.weather[0].description,icon:t.weather[0].icon};return Object(l.jsxs)("div",{className:"days",children:[Object(l.jsx)("h3",{className:"day",children:c.name()}),Object(l.jsx)("div",{className:"image-area",children:Object(l.jsx)("img",{src:"http://openweathermap.org/img/w/".concat(c.icon,".png"),alt:"weather-icon"})}),Object(l.jsx)("p",{children:c.description}),Object(l.jsxs)("h3",{className:"temp",children:[c.temp,"metric"==a?"\xb0c":"\xb0F"]})]})},u=function(e){var t=e.forecast_data,a=e.units;return Object(l.jsxs)("div",{className:"forecast",children:[Object(l.jsx)("h2",{children:"Five day forecast "}),Object(l.jsx)("div",{className:"grid",children:t.map((function(e){return Object(l.jsx)(h,{day:e,units:a},e.weather[0].id*Math.random())}))})]})};var m=function(){var e=Object(c.useState)(null),t=Object(r.a)(e,2),a=t[0],n=t[1],i=Object(c.useState)(null),s=Object(r.a)(i,2),h=s[0],m=s[1],b=Object(c.useState)([]),p=Object(r.a)(b,2),O=p[0],y=p[1],x=Object(c.useState)("metric"),f=Object(r.a)(x,2),v=f[0],w=f[1],g=Object(c.useState)(!1),N=Object(r.a)(g,2),k=N[0],_=N[1],S=Object(c.useState)(!1),C=Object(r.a)(S,2),F=C[0],D=C[1];return Object(c.useEffect)((function(){if(null!==a){D(!0);var e="appid",t="7bd717dc76c91a0893bd61ca2da801e2";fetch("http://api.openweathermap.org/data/2.5/weather?q=".concat(a,"&").concat(e,"=").concat(t,"&units=").concat(v)).then((function(e){return e.ok?e.json():(alert("oops sorry your city wasn't found please enter a valid city name"),!1)})).then((function(e){!1!==e&&m(e)})).catch((function(e){console.log(e)})),fetch("http://api.openweathermap.org/data/2.5/forecast?q=".concat(a,"&mode=json&").concat(e,"=").concat(t,"&units=").concat(v)).then((function(e){return e.ok?e.json():(alert("oops sorry your city wasn't found please enter a valid city name"),!1)})).then((function(e){if(!1===e)return _(!1),void D(!1);var t=e.list.filter((function(e){return new Date(e.dt_txt).getDay===(new Date).getDay()||0===new Date(e.dt_txt).getHours()}));y(t),_(!0)})).catch((function(e){console.log(e)}))}}),[a,v]),Object(l.jsxs)("div",{className:"App",children:[Object(l.jsx)(o,{setCity_name:n,setUnits:w}),Object(l.jsx)(d,{}),!k&&Object(l.jsx)("div",{id:"no-city",children:Object(l.jsx)("h3",{children:F?"loading please wait...":"Please enter a city to display your weather"})}),k&&Object(l.jsx)(j,{current_weather_data:h,units:v,setUnits:w}),k&&Object(l.jsx)(u,{forecast_data:O,units:v})]})};s.a.render(Object(l.jsx)(n.a.StrictMode,{children:Object(l.jsx)(m,{})}),document.getElementById("root"))},9:function(e,t,a){}},[[12,1,2]]]);
//# sourceMappingURL=main.ed405809.chunk.js.map