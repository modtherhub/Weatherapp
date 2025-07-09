import { useContext } from "react";
import WeatherIcone from "./WeatherIcone";

const DailyForcastWidget = ({data}: any) => {
    const {} = useContext
    const { 
        day,
        temperature_min,
        temperature_max, 
        icon, 
        summary,
        precipitation
    } = data;

    const now_date = {
        day: new Intl.DateTimeFormat(navigator.language, { 
            weekday: 'short', 
            month: "2-digit",
            day: "2-digit",
        }).format(new Date()),
    }

    const weather_date = {
        day: new Intl.DateTimeFormat(navigator.language, { 
            weekday: 'short', 
            month: "2-digit",
            day: "2-digit",
        }).format(new Date(day)),
    }

    weather_date.day = 
        now_date.day === weather_date.day ? 'Today' : weather_date.day;
    
    return (
    <div className='container widget flex flex-col items-center justify-between bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 ease-in-out'>
            <div className='widget container border py-4 px-6 m-4 w-[200px] space-y-3'>
            <div className='day text-center font-bold'>{weather_date.day}</div>
            

            <div className='icon-tem flex items-center justify-between'>
              <div className='icon'>
                <WeatherIcone iconNumber={icon} alt={summary}/>
              </div>
              <div className='temperature text-xl font-semibold'>
                
                <div className="max">{Math.round(temperature_max)} °C</div>
                <div className="min">{Math.round(temperature_min)} °C</div>
              </div>
            </div>

            <div className='precipitation text-sm text-gray-600 text-center'>
              <div>{Math.round(precipitation.total)} mm/h</div>
              <div>{precipitation.type}</div>
            </div>
            
            <div className='wind flex items-center justify-between'>
              
            </div>
        </div>
        </div>
  )
}

export default DailyForcastWidget