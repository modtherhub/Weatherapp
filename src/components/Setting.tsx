import { Moon, Settings, Sun } from 'lucide-react';

export const Setting = () => {
  return (
    <div className='setting flex gap-2 items-center'>
      <div className='theme-toggler'>
        <div className='theme-button flex gap-1 items-center'>
          <div className='ligth-theme-button'>
            <Sun/>
          </div>
          <div className='ligth-theme-button'>
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
