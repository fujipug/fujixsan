import Link from "next/link"
export default function Navbar() {
  return (
    <div className='text-3xl ml-3'>
      <ul className="flex">
        <li className="mr-2">
          <Link href="/music" className="text-gray-300 px-2 hover:text-white hover:bg-gray-600 hover:bg-opacity-70">Music</Link>
        </li>
        <li className="mr-6">
          <Link href="/shows" className="text-gray-300 px-2 hover:text-white hover:bg-gray-600 hover:bg-opacity-70">Shows</Link>
        </li>
        <li className="mr-6">
          <Link href="/bio" className="text-gray-300 px-2 hover:text-white hover:bg-gray-600 hover:bg-opacity-70">Bio</Link>
        </li>
        <li className="mr-6">
          <Link href="/press-kit" className="text-gray-300 px-2 hover:text-white hover:bg-gray-600 hover:bg-opacity-70">Press Kit</Link>
        </li>
        <li className="mr-6">
          <Link href="/venues" className="text-gray-300 px-2 hover:text-white hover:bg-gray-600 hover:bg-opacity-70">Venues</Link>
        </li>
        <li className="mr-6">
          <Link href="/merch" className="text-gray-300 px-2 hover:text-white hover:bg-gray-600 hover:bg-opacity-70">Merch</Link>
        </li>
      </ul>
    </div>
  )
}