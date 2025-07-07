
import WeatherIcone from './WeatherIcone';


const HourlyForcastWidget = ({data}:any) => {
    
    const { time, temperature, date, icon, summary, wind } = data;
    console.log(data)
    return (
        <div className='widget'>
            <div className='day'>{date}</div>
            <div className='time'>{time}</div>
            <div className='icon'>
                <WeatherIcone iconNumber={icon} alt={summary}/>
            </div>
            
        </div>
  )
}

export default HourlyForcastWidget