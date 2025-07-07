import React from 'react'

type WeatherIconProps = {
  iconNumber: number;
  alt: string;
}

const WeatherIcone = ({iconNumber, alt}:WeatherIconProps) => {
    return (
        <div>
            <img src={`/dist/weather_icons/set01/big/${iconNumber}.png`} 
            alt={alt} />
        </div>
  )
}

export default WeatherIcone