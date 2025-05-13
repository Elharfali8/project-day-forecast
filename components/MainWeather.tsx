import {MapPin } from 'lucide-react'
import Image from 'next/image'
import React from 'react'
import cloudy from '@/public/assets/cloudy.png'

const MainWeather = () => {
  return (
      <div className='px-4 py-8 rounded-lg bg-muted'>
          {/*  */}
          <div className='flex justify-between items-center'>
              <div className='bg-slate-200 dark:bg-slate-500 px-3 rounded-lg flex items-center gap-x-6 py-1'>
                  <span ><MapPin /></span>
                  <span className='poppins-medium lg:text-lg'>
                      Marrakech, Morocco
                  </span>
              </div>
              <div className='bg-slate-200 dark:bg-slate-500 px-3 rounded-lg flex items-center gap-x-6 py-1'>
                  C°
              </div>
          </div>
          {/*  */}
          <div className='grid grid-cols-5 mt-3 lg:mt-5'>
              <div className='col-span-3 grid'>
                  <div className='grid'>
                      <h3 className='text-2xl lg:text-4xl xl:text-5xl poppins-medium'>Sunday</h3>
                        <span className='text-sm lg:text-lg poppins-medium text-gray-500 dark:text-gray-300'>04 Aug,2025</span>
                  </div>
                  <div className='w-full flex items-center justify-end'>
                      <Image src={cloudy} alt='cloudy' width={150} height={150} className='w-[80px] h-[80px] md:w-[100px] md:h-[100px] lg:w-[150px] lg:h-[150px]' />
                  </div>
              </div>
              <div className='col-span-2 flex flex-col justify-between'>
                  <div className='flex justify-end flex-col '>
                  <h3 className='text-2xl lg:text-4xl poppins-medium mb-1 flex justify-end'>28C°</h3>
                  <span className=' md:text-lg lg:text-xl poppins-medium text-gray-500 dark:text-gray-300 flex justify-end'>/24C°</span>
                  </div>
                  <div className='flex justify-end flex-col items-end'>
                      <h3 className='text-2xl xl:text-3xl mb-1'>Heavy Rain</h3>
                      <p className='text-gray-200 text-lg xl:text-xl'>Feels like 31°</p>
                  </div>
              </div>
          </div>
    </div>
  )
}

export default MainWeather