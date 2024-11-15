import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import MobileNav from './MobileNav'


const Navbar = () => {
  return (
    <nav className='flex-between fixed z-50 w-full bg-dark-1 px-6 lg:px-10' >
      <Link href="/" className='flex items-center gap-1'>
      <Image
        src='/icons/icons8-boom-48.svg'
        alt='Boom Logo'
        width={32}
        height={32}
        >
      </Image>
      <p className="text-[26px] font-extrabold text-white max-sm:hidden">
        Boom
      </p>
      </Link>

      <div>
        {/* Clerk user management*/}

        <MobileNav/>

      </div>

    </nav>
  )
}

export default Navbar