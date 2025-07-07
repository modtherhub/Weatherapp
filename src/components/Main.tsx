import CurrentWeather from './CurrentWeather'
import Forcast from './Forcast'
import { getHourlyForecast } from './api'
import { getDailyForecast } from './api'

const Main = () => {
  return (
    <div>
      <CurrentWeather/>
      <Forcast type='hourly' title='HOURLY FORCAST' data={getHourlyForecast()}/>
      <Forcast type='daily' title='21 DAYS FORCAST' data={getDailyForecast()}/>
    </div>
  )
}

export default Main