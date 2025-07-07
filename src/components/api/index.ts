import currentWeather from './current_weather.json'

function getCurrentWeather() {
  return currentWeather.current;
}

export { getCurrentWeather };