import FiveDaysForecast from '@/components/FiveDaysForecast'
import HighlightToday from '@/components/HighlightToday'
import MainWeather from '@/components/MainWeather'
import { ModeToggle } from '@/components/ModeToggle'
import React from 'react'

const WeatherPage = () => {
  return (
    <main  className='grid grid-cols-1 lg:grid-cols-10 gap-4'>
      <div className='lg:col-span-6'>
        <div className='col-span-1 lg:col-span-4 mb-4 lg:mb-6'>
          <MainWeather />
          
        </div>
        <div className='col-span-1 lg:col-span-5 '>
            <HighlightToday />
        </div>
      </div>
      <div className='lg:col-span-4 h-full bg-muted rounded-xl p-4 w-full'>
      <FiveDaysForecast />
      </div>
    </main>
  )
}

export default WeatherPage