import currentWeather from './current_weather.json'
import dailyForecast from './daily_forcast.json'
import hourlyForecast from './hourly_forcast.json'

function getCurrentWeather() {
  return currentWeather.current;
}

function getDailyForecast() {
  return dailyForecast.daily.data;
}

function getHourlyForecast() {
  return hourlyForecast.hourly.data;
}

export { getCurrentWeather, getDailyForecast, getHourlyForecast };