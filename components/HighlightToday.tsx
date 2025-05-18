import { Cloud, Droplets, Eye, Sunrise, Sunset, Wind } from 'lucide-react'
import React from 'react'

const HighlightToday = () => {
  return (
    <div className='px-4 py-8 rounded-lg bg-muted'>
          {/*  */}
          <div className=''>
              <h1 className='text-xl md:text-2xl lg:text-3xl poppins-bold mb-3 lg:mb-5'>Today's Highlight</h1>
              {/* ----------------- */}
              
              <div className='grid grid-cols-2 gap-4 xl:grid-cols-4 mb-3 lg:mb-5'>
                  {/*  */}
                  <div className='col-span-1 bg-muted-two p-2 rounded-lg py-5' >
                      <span className='flex items-center gap-x-2 text-lg poppins-medium lg:text-xl'>
                          <Wind />
                          Wind Status
                      </span>
                      <div className='flex flex-col justify-end items-end mt-2'>
                          <p className='lg:text-lg'><span className='poppins-semibold text-lg md:text-xl lg:text-2xl'>7.90</span> km/h</p>
                      </div>
                  </div>
                  {/*  */}
                    <div className='col-span-1 bg-muted-two p-2 rounded-lg py-5' >
                      <span className='flex items-center gap-x-2 text-lg poppins-medium lg:text-xl'>
                          <Droplets />
                          Humidity
                      </span>
                      <div className='flex flex-col justify-end items-end mt-2'>
                          <p className='lg:text-lg'><span className='poppins-semibold text-lg md:text-xl lg:text-2xl'>85</span> %</p>
                      </div>
                  </div>
                  {/*   */}
                  <div className='col-span-2 bg-muted-two p-2 rounded-lg py-3 flex items-center justify-around' >
                      <div>
                          <Sunrise size={50} />
                      </div>
                      <div>
                          <p className='mb-2 text-lg md:text-xl poppins-medium' >Sunrise</p>
                          <p className=' text-lg sm:text-xl lg:text-2xl poppins-bold'>4:50 AM</p>
                      </div>
                  </div>
              </div>
              {/* ----------------- */}
              <div className='grid grid-cols-2 gap-4 xl:grid-cols-4'>
                  {/*  */}
                  <div className='col-span-1 bg-muted-two p-2 rounded-lg py-3' >
                      <span className='flex items-center gap-x-2 text-lg poppins-medium lg:text-xl'>
                          <Cloud />
                          Cloudiness
                      </span>
                      <div className='flex flex-col justify-end items-end mt-2'>
                          <p className='lg:text-lg'><span className='poppins-semibold text-lg md:text-xl lg:text-2xl'>83</span> %</p>
                      </div>
                  </div>
                  {/*  */}
                    <div className='col-span-1 bg-muted-two p-2 rounded-lg py-3' >
                      <span className='flex items-center gap-x-2 text-lg poppins-medium lg:text-xl'>
                          <Eye />
                          Visibility
                      </span>
                      <div className='flex flex-col justify-end items-end mt-2'>
                          <p className='lg:text-lg'><span className='poppins-semibold text-lg md:text-xl lg:text-2xl'>5</span> km</p>
                      </div>
                  </div>
                  {/*   */}
                  <div className='col-span-2 bg-muted-two p-2 rounded-lg py-5 flex items-center justify-around' >
                      <div>
                          <Sunset size={50} />
                      </div>
                      <div>
                          <p className='mb-2 text-lg md:text-xl poppins-medium' >Sunset</p>
                          <p className=' text-lg sm:text-xl lg:text-2xl poppins-bold'>6:45 PM</p>
                      </div>
                  </div>
              </div>
          </div>
          </div>
  )
}

export default HighlightToday