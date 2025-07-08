
import { Send } from 'lucide-react';
import WeatherIcone from './WeatherIcone';


const HourlyForcastWidget = ({data}:any) => {
    
    const {temperature, date, icon, summary, wind, precipitation } = data;


    // Format the time to a readable format
    const now_date = {
        day: new Intl.DateTimeFormat(navigator.language, { 
            weekday: 'short', 
            month: "2-digit",
            day: "2-digit",
        }).format(new Date()),
         time: new Intl.DateTimeFormat(navigator.language, { 
            hour: '2-digit', 
            minute: "2-digit",
        }).format(new Date().setMinutes(0)),
    }

    const weather_date = {
        day: new Intl.DateTimeFormat(navigator.language, { 
            weekday: 'short', 
            month: "2-digit",
            day: "2-digit",
        }).format(new Date(date)),
         time: new Intl.DateTimeFormat(navigator.language, { 
            hour: '2-digit', 
            minute: "2-digit",
        }).format(new Date(date).setMinutes(0)),
    }

    weather_date.day = 
        weather_date.day === now_date.day  && 
        weather_date.time === now_date.time
        ? 'Today'
        : weather_date.time === '00:00' 
        ? weather_date.day : ''
        ;

    return (
        <div className='container widget flex flex-col items-center justify-between bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 ease-in-out'>
            <div className='widget container border py-4 px-6 m-4 w-[200px] space-y-3'>
            <div className='day text-center font-bold'>{weather_date.day}</div>
            <div className='time text-center'>{weather_date.time}</div>

            <div className='icon-tem flex items-center justify-between'>
              <div className='icon'>
                <WeatherIcone iconNumber={icon} alt={summary}/>
              </div>
              <div className='temperature text-xl font-semibold'>
                {Math.round(temperature)} °C
              </div>
            </div>

            <div className='precipitation text-sm text-gray-600 text-center'>
              {Math.round(precipitation.total)} mm/h
            </div>

            <div className='wind flex items-center justify-between'>
              <div className='speed'>{Math.round(wind.speed)} km/h</div>
              <div className='dir'>
                <Send 
                style={{ rotate: `${-45 + wind.angle}deg` }}
                className=""/>
              </div>
            </div>
        </div>
        </div>
        
  )
}

export default HourlyForcastWidget