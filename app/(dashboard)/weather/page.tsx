import HighlightToday from '@/components/HighlightToday'
import MainWeather from '@/components/MainWeather'
import { ModeToggle } from '@/components/ModeToggle'
import React from 'react'

const WeatherPage = () => {
  return (
    <main className='grid lg:grid-cols-9 lg:gap-8 gap-4'>
      <div className='col-span-1 lg:col-span-4 '>
        <MainWeather />
        hola
      </div>
      <div className='col-span-1 lg:col-span-5'>
      <HighlightToday />
      </div>
    </main>
  )
}

export default WeatherPage