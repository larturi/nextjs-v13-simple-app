import Link from 'next/link';
import React from 'react'

function Navbar() {
  return (
    <nav className='bg-gray-800 mb-4 flex justify-between items-center px-20 p-4'>
        <Link href="/">
            Home
        </Link>

        <ul className='flex gap-4'>
            <li>
                <Link href="/">Users</Link>
            </li>
            <li>
                <Link href="/about">About</Link>
            </li>
        </ul>
    </nav>
  )
}

export default Navbar