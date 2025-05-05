'use client'

import { CloudSun, Grid, HelpCircle, LogOut, Map, Menu } from 'lucide-react'
import React, { useState } from 'react'

const Sidebar = () => {
    const [sideIsOpen, setSideIsOpen] = useState(false)

    const handleSidebar = () => {
        setSideIsOpen(!sideIsOpen)
    }

  return (
      <aside className='hidden lg:grid place-items-center'>
          <div className='h-[90%] bg-muted px-2 rounded-xl flex flex-col items-center justify-between gap-4 py-8'>
              <div className='grid place-items-center'>
                  <button type='button' className='cursor-pointer p-4 border-b border-b-muted-foreground hover:bg-muted  transition duration-300' onClick={handleSidebar}>
                  <Menu className='text-4xl text-muted-foreground' size={27}  />
                    </button>
              </div>
              <ul className='flex flex-col items-start justify-center gap-4 mb-20'>
                    <li>
                        <button type='button' className='cursor-pointer p-4 hover:bg-muted  transition duration-300'>
                          <span className='text-lg poppins-semibold text-muted-foreground flex  items-center justify-center gap-2'>
                              <CloudSun className='text-muted-foreground' size={27} />
                              {sideIsOpen && <span className='text-muted-foreground'>  Dashboard</span>}
                            </span>
                        </button>
                    </li>
                    <li>
                        <button type='button' className='cursor-pointer p-4 hover:bg-muted  transition duration-300'>
                        <span className='text-lg poppins-semibold text-muted-foreground flex  items-center justify-center gap-2'>
                              <Map className='text-muted-foreground' size={27} />
                              {sideIsOpen && <span className='text-muted-foreground'>  Maps</span>}
                            </span>
                        </button>
                  </li>
                  <li>
                        <button type='button' className='cursor-pointer p-4 hover:bg-muted  transition duration-300'>
                        <span className='text-lg poppins-semibold text-muted-foreground flex  items-center justify-center gap-2'>
                              <HelpCircle className='text-muted-foreground' size={27} />
                              {sideIsOpen && <span className='text-muted-foreground'>  Help</span>}
                            </span>
                        </button>
                    </li>
              </ul>
              <div className='grid place-items-center'>
                  <button type='button' className='cursor-pointer p-4 border-t border-t-muted-foreground hover:bg-muted flex items-center gap-2 transition duration-300'>
                  <LogOut className='text-4xl text-muted-foreground' size={27}  />
                  </button>
                  {sideIsOpen && <span className='text-muted-foreground'>  Log Out</span>}
              </div>
          </div>
    </aside>
  )
}

export default Sidebar