import React from 'react'
import { MapPin } from 'lucide-react';

const Place = () => {
  return (
    <div className='flex gap-0.5 items-center'>
      <MapPin/>
      <p>London</p>, United Kingdom
    </div>
  )
}

export default Place