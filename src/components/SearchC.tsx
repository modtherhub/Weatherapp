import { Search } from 'lucide-react';
import React from 'react'

const SearchC = () => {
  return (
    <>
    <div className='Search container relative flex justify-center items-center max-h-6 max-w-[200px] rounded-full border border-amber-600  py-3 '>
      <div className='search icon absolute left-0 top-1/2 -translate-y-[50%] pl-2'>
       <Search className='size-5'/>
      </div>
      <div className='search input relative '>
        <input type="text" name='Search City' 
        className='w-[100%] border-none outline-none bg-transparent pl-4 py-1 -translate-y-[2%] font-light text-xs' 
        placeholder='Search City ...'/>
      </div>
    </div>
    </>
  )
}

export default SearchC