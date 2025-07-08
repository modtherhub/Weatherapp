import { MapPin } from 'lucide-react';
import { useContext } from 'react';
import WeatherContext from '../context/weather.context';


const Place = () => {
  const {place} = useContext(WeatherContext)  
  return (
    <div className='flex gap-0.5 items-center'>
      <MapPin/>
      <p>{place.name}</p>, {place.country}
    </div>
  )
}

export default Place