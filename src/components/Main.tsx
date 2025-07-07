import React from 'react'
import CurrentWeather from './CurrentWeather'
import Forcast from './Forcast'

const Main = () => {
  return (
    <div>
      <CurrentWeather/>
      <Forcast type='hourly' title='HOURLY FORCAST' data={}/>
      <Forcast type='daily' title='21 DAYS FORCAST' data={}/>
    </div>
  )
}

export default Main