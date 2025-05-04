import Link from 'next/link'
import React from 'react'

const HomePage = () => {
  return (
    <main className='h-screen w-full '>
      <nav className="h-16  flex items-center justify-between bg-blue-600 text-white shadow-md">
        <div className='container mx-auto flex justify-between items-center px-4'>
          <h2 className="poppins-bold text-2xl ">DAY<span className='primary-gradient  rounded px-2'>FORECAST</span></h2>
          <ul>
            <li>
              <Link href='/register' className='text-lg lg:text-xl hover:text-gray-200 transition duration-300'>
                login / register
              </Link>
            </li>
          </ul>
    </div>
</nav>

      <div className="grid place-items-center main-gradient h-[calc(100vh-4rem)]">
      <div className='flex flex-col items-center justify-center gap-4 text-center'>
        <h1 className='text-4xl lg:text-6xl poppins-extrabold text-white'>Day Forecast</h1>
          <span className='text-2xl lg:text-3xl poppins-semibold text-white'>Stay Ahead of the Weather
          </span>
        <p className='text-lg lg:text-xl poppins-regular text-white'>Get real-time forecasts, temperature updates, and weather highlights for your current location and beyond.
        </p>
        <p className='text-lg lg:text-xl poppins-regular text-white'>Click the button below to get started.
        </p>
        <Link href='/weather' className='bg-white text-black px-4 py-2 rounded-lg hover:bg-gray-200 transition duration-300'>
          Get Started
        </Link>
        </div>
      </div>
    </main>
  )
}

export default HomePage