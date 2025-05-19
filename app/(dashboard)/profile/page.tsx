import { UserProfile } from '@clerk/nextjs'
import React from 'react'

const ProfilePage = () => {
  return (
      <main className='w-full h-full'>
          <UserProfile />
    </main>
  )
}

export default ProfilePage