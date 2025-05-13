'use client'

import Navbar from '@/components/Navbar'
import Sidebar from '@/components/Sidebar'
import React from 'react'

const layout = ({children}:{children:React.ReactNode}) => {
  return (
      <main className='flex h-screen w-full px-4 lg:px-8'>
          <Sidebar />
      <div className='h-full w-full lg:px-8 lg:flex lg:items-center'>
      <div className='lg:h-[90%] h-full w-full '>
              <Navbar />
            {children}
          </div>
          </div>
    </main>
  )
}

export default layout