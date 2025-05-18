'use client'

import { CloudSun, Grid, HelpCircle, LogOut, Map, Menu } from 'lucide-react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React, { useState } from 'react'

const Sidebar = () => {
    const [sideIsOpen, setSideIsOpen] = useState(false)
    const pathname = usePathname()

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
                        <Link href='/weather' className={`${pathname === '/weather' ? 'bg-muted-two  text-white' : ''} p-2 rounded-lg flex items-center justify-center gap-2`}>
                          <span className='text-lg poppins-semibold text-muted-foreground flex  items-center justify-center gap-2'>
                              <CloudSun className='text-muted-foreground' size={27} />
                              {sideIsOpen && <span className='text-muted-foreground'>  Weather</span>}
                            </span>
                        </Link>
                    </li>
                    <li>
                        <Link href='/map' className={`${pathname === '/map' ? 'bg-muted-two text-white' : ''} p-2 rounded-lg flex items-center justify-center gap-2`}>
                        <span className='text-lg poppins-semibold text-muted-foreground flex  items-center justify-center gap-2'>
                              <Map className='text-muted-foreground' size={27} />
                              {sideIsOpen && <span className='text-muted-foreground'>  Map</span>}
                            </span>
                        </Link>
                  </li>
                  <li>
                        <Link href='/help' className={`${pathname === '/help' ? 'bg-muted-two text-white' : ''} p-2 rounded-lg flex items-center justify-center gap-2`}>
                        <span className='text-lg poppins-semibold text-muted-foreground flex  items-center justify-center gap-2'>
                              <HelpCircle className='text-muted-foreground' size={27} />
                              {sideIsOpen && <span className='text-muted-foreground'>  Help</span>}
                            </span>
                        </Link>
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