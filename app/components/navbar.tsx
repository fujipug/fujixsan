'use client'
import Link from "next/link"
import { usePathname } from 'next/navigation'
export default function Navbar() {
  const pathname = usePathname()

  return (
    <div className='text-2xl sm:text-3xl ml-3 overflow-x-auto'>
      <ul className="flex">
        {pathname !== '/' &&
          <>
            <li className="mr-2">
              <Link href="/" className="text-gray-100 px-2 hover:text-white hover:bg-gray-600 transition duration-300 ease-in-out hover:bg-opacity-70">Home</Link>
            </li>
            <li className="mr-2">
              <div className="vl"></div>
            </li>
          </>
        }
        <li className="mr-2">
          <Link href="/music" className="text-gray-100 px-2 hover:text-white hover:bg-gray-600 transition duration-300 ease-in-out hover:bg-opacity-70">Music</Link>
        </li>
        <li className="mr-6">
          <Link href="/shows" className="text-gray-100 px-2 hover:text-white hover:bg-gray-600 transition duration-300 ease-in-out hover:bg-opacity-70">Shows</Link>
        </li>
        <li className="mr-6">
          <Link href="/bio" className="text-gray-100 px-2 hover:text-white hover:bg-gray-600 transition duration-300 ease-in-out hover:bg-opacity-70">Bio</Link>
        </li>
        <li className="mr-6">
          <Link href="/venues" className="text-gray-100 px-2 hover:text-white hover:bg-gray-600 transition duration-300 ease-in-out hover:bg-opacity-70">Venues</Link>
        </li>
        <li className="mr-6">
          <Link href="/epk" className="text-gray-100 px-2 hover:text-white hover:bg-gray-600 transition duration-300 ease-in-out hover:bg-opacity-70">EPK</Link>
        </li>
        {/* <li className="mr-6">
          <Link href="/merch" className="text-gray-100 px-2 hover:text-white hover:bg-gray-600 transition duration-300 ease-in-out hover:bg-opacity-70">Merch</Link>
        </li> */}
      </ul>
    </div>
  )
}
