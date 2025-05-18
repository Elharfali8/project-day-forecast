import { Sun } from 'lucide-react'
import React from 'react'

const FiveDaysForecast = () => {
  return (
      <div >
          <h1 className='text-xl md:text-2xl lg:text-3xl poppins-bold mb-3 lg:mb-5'>5 Day Forecast</h1>
          <ul className='grid gap-3'>
              <li className='flex items-center justify-between bg-muted-two p-2 rounded-lg py-3'>
                  <h3 className='text-lg poppins-semibold lg:text-2xl '>Monday</h3>
                  <div className='flex items-center flex-col gap-x-2'>
                      <Sun size={40} />
                      <div className='mt-2'>
                      <span className='text-lg poppins-medium'>28C°</span>
                          <span className='text-sm poppins-medium text-gray-500 dark:text-gray-300'>/24C°</span>
                      </div>       
                        </div>
              </li>
              <li className='flex items-center justify-between bg-muted-two p-2 rounded-lg py-3'>
                  <h3 className='text-lg poppins-semibold lg:text-2xl '>Monday</h3>
                  <div className='flex items-center flex-col gap-x-2'>
                      <Sun size={40} />
                      <div className='mt-2'>
                      <span className='text-lg poppins-medium'>28C°</span>
                          <span className='text-sm poppins-medium text-gray-500 dark:text-gray-300'>/24C°</span>
                      </div>       
                        </div>
              </li>
              <li className='flex items-center justify-between bg-muted-two p-2 rounded-lg py-3'>
                  <h3 className='text-lg poppins-semibold lg:text-2xl '>Monday</h3>
                  <div className='flex items-center flex-col gap-x-2'>
                      <Sun size={40} />
                      <div className='mt-2'>
                      <span className='text-lg poppins-medium'>28C°</span>
                          <span className='text-sm poppins-medium text-gray-500 dark:text-gray-300'>/24C°</span>
                      </div>       
                        </div>
              </li>
              <li className='flex items-center justify-between bg-muted-two p-2 rounded-lg py-3'>
                  <h3 className='text-lg poppins-semibold lg:text-2xl '>Monday</h3>
                  <div className='flex items-center flex-col gap-x-2'>
                      <Sun size={40} />
                      <div className='mt-2'>
                      <span className='text-lg poppins-medium'>28C°</span>
                          <span className='text-sm poppins-medium text-gray-500 dark:text-gray-300'>/24C°</span>
                      </div>       
                        </div>
              </li>
              <li className='flex items-center justify-between bg-muted-two p-2 rounded-lg py-3'>
                  <h3 className='text-lg poppins-semibold lg:text-2xl '>Monday</h3>
                  <div className='flex items-center flex-col gap-x-2'>
                      <Sun size={40} />
                      <div className='mt-2'>
                      <span className='text-lg poppins-medium'>28C°</span>
                          <span className='text-sm poppins-medium text-gray-500 dark:text-gray-300'>/24C°</span>
                      </div>       
                        </div>
                </li>
          </ul>
    </div>
  )
}

export default FiveDaysForecast