
import { Send } from 'lucide-react';
import WeatherIcone from './WeatherIcone';


const HourlyForcastWidget = ({data}:any) => {
    
    const { time, temperature, date, icon, summary, wind, precipitation } = data;
    console.log(data)
    return (
        <div className='widget'>
            <div className='day'>{date}</div>
            <div className='time'>{time}</div>
            <div className='icon-tem'>
                <div className='icon'>
                    <WeatherIcone iconNumber={icon} alt={summary}/>
                </div>
                <div className='temperature'>
                    {Math.round(temperature)} °C
                </div>
            </div>
            <div className='precipitation'>
                {Math.round(precipitation.total)} mm/h
            </div>
            <div className='wind'>
                <div className='speed'>{Math.round(wind.speed)} km/h</div>
                <div className='dir '>
                    <Send className='transform rotate-[-45deg]'/>
                </div>
            </div>
        </div>
  )
}

export default HourlyForcastWidget