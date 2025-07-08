import CurrentWeather from './CurrentWeather'
import Forcast from './Forcast'
import ForecastRow from './ForecastRow'
import { getHourlyForecast } from './api'
import { getDailyForecast } from './api'

const Main = () => {
  return (
    <div>
      <CurrentWeather/>
      <ForecastRow data={getHourlyForecast()}/>
      <Forcast type='daily' title='21 DAYS FORCAST' data={getDailyForecast()}/>
      
    </div>
  )
}

export default Main