import { Moon, Settings, Sun } from 'lucide-react';
import { useContext } from 'react';
import ThemeContext from '../context/theme.context';

export const Setting = () => {
  const {dark, setDark, saveThemeToLocalStorage}: any = useContext(ThemeContext);

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
      <div className='setting-but'>
        <Settings/>
      </div>
    </div>
  )
}
