import React from 'react'
import Link from 'next/link'

export default function Header() {
  return (
    <div className='flex gap-5 bg-yellow-400 text-white h-20 items-center justify-end pr-20'>
        <Link className='' href='/'>
            Home
        </Link>
        <Link className='' href='/about'>
            About
        </Link>
        <Link className='' href='/contact'>
            Contact
        </Link>
    </div>
  )
}
