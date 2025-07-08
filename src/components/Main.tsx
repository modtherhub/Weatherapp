import CurrentWeather from './CurrentWeather'
import DForecastRow from './DForecastRow'
import Forcast from './Forcast'
import HForecastRow from './HForecastRow'
import { getHourlyForecast } from './api'
import { getDailyForecast } from './api'

const Main = () => {
  return (
    <div>
      <CurrentWeather/>
      <HForecastRow data={getHourlyForecast()}/>
      <DForecastRow data={getDailyForecast()}/>
      
      
    </div>
  )
}

export default Main