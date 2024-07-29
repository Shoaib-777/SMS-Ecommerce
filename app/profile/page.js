import Link from 'next/link';
import React from 'react'


const Profile = () => {
  return (<>
  <div>
    <h2 className='text-5xl font-bold font-mono text-center'>User Profile</h2>
    <div className=' container min-h-[85vh] lg:min-h-[60vh] mx-auto px-6 '>
      <div className='mt-[8rem]'>

      <h2 className='text-center font-semibold text-3xl mb-4'>NO Profile Found !</h2>
      <h2 className='text-center font-semibold text-3xl '>Login <Link href={'/login'}><span className='text-red-600 hover:underline cursor-pointer'>Here</span></Link></h2>
      </div>
    </div>
  </div>
    </>
  )
}

export default Profile