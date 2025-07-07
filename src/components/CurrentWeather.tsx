import { Cloudy, Droplet, Droplets, Eye, GlassesIcon, Wind } from 'lucide-react';
import { getCurrentWeather } from './api';

const CurrentWeather = () => {
  const data = getCurrentWeather();
    const { 
        temperature, 
        icon_num, 
        cloud_cover, 
        feels_like,
        visibility,
        uv_index,
        summary,
        pressure,
        precipitation,
        wind,
        humidity,
    } = data;

    // Define units manually since data.units does not exist
    /* const units = {
      precipitation: 'mm',
      wind_speed: 'km/h',
      humidity: '%',
      uv_index: '',
      cloud_cover: '%',
      visibility: 'km',
    }; */
    
    const otherInfoWidgets = [
    {
      id: 0,
      icon: <Droplet/>,
      name: 'Precipitation',
      value: Math.round(precipitation.total),
      unit: 'in/h',
    },
    {
      id: 1,
      icon: <Wind/>,
      name: 'Wind',
      value: Math.round(wind.speed),
      unit: 'mph',
    },
    {
      id: 2,
      icon: <Droplets/>,
      name: 'Humidity',
      value: Math.round(humidity),
      unit: '%',
    },
    {
      id: 3,
      icon: <GlassesIcon/>,
      name: 'UV index',
      value: Math.round(uv_index),
      unit: '',
    },
    {
      id: 4,
      icon: <Cloudy/>,
      name: 'Clouds cover',
      value: Math.round(cloud_cover),
      unit: '%',
    },
    {
      id: 5,
      icon: <Eye/>,
      name: 'Visibility',
      value: Math.round(visibility),
      unit: 'mi',
    },
  ];
    
        return (
    <div className='flex flex-col items-center py-4 px-6 gap-4 
    lg:flex-row lg:gap-6'>
        <div className='temperature border rounded-2xl py-4 px-6 flex flex-col gap-2 w-[200px]  '>
            <div className='weather-icon items-center flex justify-center'>
                <img src={`/dist/weather_icons/set01/big/${icon_num}.png`} alt={summary} />
            </div>
            <div className='value '>
                <div className='real text-2xl'>{temperature} C</div>
                <div className='feels_likes text-xs'>Feels like {feels_like} C</div>
            </div>
            <div className='summary'>{summary}</div>
        </div>
        <div className='other-infos border rounded-2xl   grid grid-cols-3 text-sm'>
            {otherInfoWidgets.map(({id, name, value, icon, unit})=> 
            <div className='Widget text-center px-7 py-5 ' key={id}>
                <div className='widget_conataner flex flex-col items-center justify-center gap-3'>
                    <div className='info flex items-center justify-center gap-2'>
                        <div className='icone'>
                            {icon}
                        </div>
                        <div className='Value text-center'>{value}{unit}</div>
                    </div>
                    <div className='name text-center'>{name}</div>
                </div>
            </div>)}
        </div>
    </div>
  )
}

export default CurrentWeather