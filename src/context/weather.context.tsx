import { createContext, useEffect, useState } from "react"
import {DEFAULT_PLACE, MEASUREMENT_SYSTEMS, UNITS} from '../utils'
import { getWeatherData } from "/home/moibhub/Projects/weatherapp/src/components/api/index.ts";


const WeatherContext = createContext<any>(null);


function WeatherProvider ({children}: { children: React.ReactNode }){
    const [place, setPlace] = useState(DEFAULT_PLACE);
    const [loading, setLoading] = useState<any>(true);
    const [currentWeather, setCurrentWeather] = useState({});
    const [hourlyForecast, setHourlyForecast] = useState([]);
    const [dailyForecast, setDailyForecast] = useState([]);
    const [measurementSystem, setMeasurementSystem] = useState<any>(
    MEASUREMENT_SYSTEMS.AUTO
  );

    const [units, setUnits] = useState({});


    useEffect(() => {
    async function _getWeatherData() {
      setLoading(true);

      const cw = await getWeatherData(
        'current',
        place.place_id,
        measurementSystem
      );
      setCurrentWeather(cw.current);
      setUnits(UNITS[cw.units]);

      const hf = await getWeatherData(
        'hourly',
        place.place_id,
        measurementSystem
      );
      setHourlyForecast(hf.hourly.data);

      const df = await getWeatherData(
        'daily',
        place.place_id,
        measurementSystem
      );
      setDailyForecast(df.daily.data);

      setLoading(false);
    }
    _getWeatherData();
  }, [place, measurementSystem]);
  
    return (
    <WeatherContext.Provider value={{
         place,
        setPlace,
        loading,
        currentWeather,
        hourlyForecast,
        dailyForecast,
        measurementSystem,
        setMeasurementSystem,
        units,
    }}>
        {children}
    </WeatherContext.Provider>
  )
}

export {WeatherProvider};
export default WeatherContext