import Navbar from '@/components/Navbar'
import Sidebar from '@/components/Sidebar'
import React from 'react'

const layout = ({children}:{children:React.ReactNode}) => {
  return (
      <main className='flex h-screen w-full px-4 lg:px-8'>
          <Sidebar />
          <div>
              <Navbar />
            {children}
          </div>
    </main>
  )
}

export default layout