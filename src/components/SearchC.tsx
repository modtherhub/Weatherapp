import { Search } from 'lucide-react';
import { searchPlaces } from './api';
import { useState } from 'react';

const SearchC = () => {
  const [text, setText] = useState('');
  const on
  return (
    <>
    <div className='Search container relative flex justify-center items-center max-h-6 max-w-[200px] rounded-full border border-amber-600  py-3 '>
      <div className='search icon absolute left-0 top-1/2 -translate-y-[50%] pl-2'>
       <Search className='size-5'/>
      </div>
      <div className='search input relative '>
        <input 
        type="text" 
        name='Search City' 
        className='w-[100%] border-none outline-none bg-transparent pl-4 py-1 -translate-y-[2%] font-light text-xs' 
        placeholder='Search City ...'
        value={text} 
        onChange={onSearch}/>
      </div>
      <div className='search-result absolute top-9 bg-amber-400 '>
        <div className='result-container'>
          {
            <div>Test</div>
          }
        </div>
      </div>
    </div>
    </>
  )
}

export default SearchC