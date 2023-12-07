import Image from 'next/image'

export default function Home() {
  return (
    <>
      <div className="bg-[url('/fujixsan-home-small.png')] bg-right bg-no-repeat h-screen w-screen sm:bg-[url('/fujixsan-home.JPEG')] sm:bg-cover">
        <img src="/fujixsan-logo.png" alt="Fujixsan_Logo" className='w-48 h-48 sm:w-[500px] sm:h-[500px]' />
        <div className='text-2xl sm:ml-3 sm:text-3xl'>
          <ul className="sm:flex">
            <li className="mr-2">
              <a className="bg-gray-600 bg-opacity-70 sm:bg-transparent sm:bg-opacity-1 text-gray-300 px-2 hover:text-white hover:bg-gray-600 hover:bg-opacity-70" href="#">Music</a>
            </li>
            <li className="mr-6">
              <a className="bg-gray-600 bg-opacity-70 sm:bg-transparent sm:bg-opacity-1 text-gray-300 px-2 hover:text-white hover:bg-gray-600 hover:bg-opacity-70" href="#">Shows</a>
            </li>
            <li className="mr-6">
              <a className="bg-gray-600 bg-opacity-70 sm:bg-transparent sm:bg-opacity-1 text-gray-300 px-2 hover:text-white hover:bg-gray-600 hover:bg-opacity-70" href="#">Bio</a>
            </li>
            <li className="mr-6">
              <a className="bg-gray-600 bg-opacity-70 sm:bg-transparent sm:bg-opacity-1 text-gray-300 px-2 hover:text-white hover:bg-gray-600 hover:bg-opacity-70" href="#">Press Kit</a>
            </li>
            <li className="mr-6">
              <a className="bg-gray-600 bg-opacity-70 sm:bg-transparent sm:bg-opacity-1 text-gray-300 px-2 hover:text-white hover:bg-gray-600 hover:bg-opacity-70" href="#">Past Venues</a>
            </li>
            <li className="mr-6">
              <a className="bg-gray-600 bg-opacity-70 sm:bg-transparent sm:bg-opacity-1 text-gray-300 px-2 hover:text-white hover:bg-gray-600 hover:bg-opacity-50" href="#">Merch</a>
            </li>
          </ul>
        </div>
      </div>
    </>
  )
}
