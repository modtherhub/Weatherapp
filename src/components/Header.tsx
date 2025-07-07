import Place from './Place'
import SearchC from './SearchC'
import { Setting } from './Setting'

const Header = () => {
  return (
    <div className='flex items-center justify-around px-6 py-4 bg-neutral-400'>
      <Place/>
      <SearchC/>
      <Setting/>
    </div>
  )
}

export default Header