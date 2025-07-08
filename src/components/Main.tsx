import CurrentWeather from './CurrentWeather'
import DForecastRow from './DForecastRow'
import Forcast from './Forcast'
import HForecastRow from './HForecastRow'
import { useContext } from 'react'
import WeatherContext from '../context/weather.context'
import Loader from './Loader'

const Main = () => {
  const {loading, currentWeather, hourlyForecast, dailyForecast} = useContext(WeatherContext)
  
  return (
    <div>
      {loading ? 
      (<Loader/>) : (
        <>
        <CurrentWeather data={currentWeather}/>
        <HForecastRow data={hourlyForecast}/>
        <DForecastRow data={dailyForecast}/>
        </>
      )
      }
      
      
    </div>
  )
}

export default Main