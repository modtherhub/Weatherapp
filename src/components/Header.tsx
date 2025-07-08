import { useContext } from 'react'
import Place from './Place'
import SearchC from './SearchC'
import { Setting } from './Setting'
import  ThemeContext  from '/home/moibhub/Projects/weatherapp/src/context/theme.context.tsx'
import { useState } from 'react'

const Header = () => {
  const { dark, setDark } = useContext(ThemeContext);
  
  return (
    <div className={
  `${dark ? 'bg-black text-white' : 'bg-white text-black'} flex items-center justify-around px-6 py-4 bg-neutral-400`
}>
      <Place/>
      <SearchC/>
      <Setting/>
      <button onClick={() => setDark(!dark)}>Toggle Theme</button>
    </div>
  )
}

export default Header