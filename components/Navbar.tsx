import React from 'react'
import SearchInput from './SearchInput'
import { Input } from './ui/input'
import { Search } from 'lucide-react'
import { ModeToggle } from './ModeToggle'

const Navbar = () => {
  return (
    <nav className='h-18'>
      <div className='hidden lg:flex items-center justify-between'>
        <h1 className='text-2xl lg:text-3xl poppins-bold'>Day<span className='text-[#4A91FF]'>Forecast</span></h1>
        <div className=' w-full flex items-center justify-end gap-4'>
          <div className='relative w-full max-w-lg'>
            <Input type="text" placeholder="Search your location" className="w-full max-w-xl" />
            <button className="absolute right-0 top-0 h-full px-4 bg-blue-500 text-white rounded-r-md ">
              <Search />
            </button>
          </div>
          <ModeToggle />
        </div>
      </div>
    </nav>
  )
}

export default Navbar