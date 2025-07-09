import { Moon, Settings, Sun } from 'lucide-react';
import { useContext, useState } from 'react';
import ThemeContext from '../context/theme.context';
import WeatherContext from '../context/weather.context';
import { MEASUREMENT_SYSTEMS } from '../utils';


export const Setting = () => {
  const [openSettings, setOpenSettings] = useState(false)
  const toggleSettings = () => {
    setOpenSettings((prev) => !prev);
  };

  const {dark, setDark, saveThemeToLocalStorage}: any = useContext(ThemeContext);

  const { measurementSystem, setMeasurementSystem } =
    useContext(WeatherContext);

  const changeMeasurementSystem = (system:any) => {
    setMeasurementSystem(system);
    setOpenSettings(false);
  };

  const toggleTheme = () => {
    setDark((perDark:any ) => !perDark)
    saveThemeToLocalStorage(!dark)
  }
  
  return (
    <div className='setting flex gap-2 items-center'>
      <div className='theme-toggler'>
        <div className='theme-button flex gap-1 items-center' onClick={toggleTheme}>
          <div className={`ligth-theme-button ${dark ? '' : 'active'}`} >
            <Sun/>
          </div>
          <div className={`dark-theme-button ${dark ? 'active' : ''}`}>
            <Moon/>
          </div>
        </div>
      </div>
      
      <button className={`cursor-pointer transition-transform duration-300 ${
          openSettings ? "rotate-90 text-red-800" : "rotate-0"
        }`}
      onClick={toggleSettings}
      >
        <Settings /> 
      </button>

      {openSettings && (
      <div className={`measerments-system absolute right-8 top-14 
        py-4 px-6 rounded-xl w-[250px]
        border border-neutral-400/60
        bg-neutral-400/20 backdrop-blur-[2px] shadow-mx 
        animate-fade-down animate-once duration-300
          ${openSettings ? 'open' : ''}`}>
          <div className='measusrment-system'>
            <h4 className='py-2 font-bold'>Measurement System</h4>
            <div className='systems 
            flex gap-3 z-2 flex-wrap 
            '>
              {Object.values(MEASUREMENT_SYSTEMS).map((system) => (
                <div 
                  className={`
                    system 
                    border px-2 py-1 rounded-lg  ${
                    system === measurementSystem ? 'active bg-amber-300' : ''
                  }`}
                  key={system}
                  onClick={() => changeMeasurementSystem(system)}
                >
                  {system}
                </div>
              ))}
            </div>
        </div>
      </div>
      )

      }
    </div>
  )
}
