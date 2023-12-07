import Image from 'next/image'

export default function Home() {
  return (
    <>
      <div className="h-screen w-screen bg-[url('/fujixsan-home.JPEG')] bg-cover">
        <Image src="/fujixsan-logo.png" alt="Fujixsan_Logo" width={500} height={500} />
        <div className='text-3xl ml-3'>
          <ul className="flex">
            <li className="mr-2">
              <a className="text-gray-300 px-2 hover:text-white hover:bg-gray-600 hover:bg-opacity-70" href="#">Music</a>
            </li>
            <li className="mr-6">
              <a className="text-gray-300 px-2 hover:text-white hover:bg-gray-600 hover:bg-opacity-70" href="#">Shows</a>
            </li>
            <li className="mr-6">
              <a className="text-gray-300 px-2 hover:text-white hover:bg-gray-600 hover:bg-opacity-70" href="#">Bio</a>
            </li>
            <li className="mr-6">
              <a className="text-gray-300 px-2 hover:text-white hover:bg-gray-600 hover:bg-opacity-70" href="#">Press Kit</a>
            </li>
            <li className="mr-6">
              <a className="text-gray-300 px-2 hover:text-white hover:bg-gray-600 hover:bg-opacity-70" href="#">Past Venues</a>
            </li>
            <li className="mr-6">
              <a className="text-gray-300 px-2 hover:text-white hover:bg-gray-600 hover:bg-opacity-50" href="#">Merch</a>
            </li>
          </ul>
        </div>

        <div className='ml-5 mt-5 flex items-center'>
          <Image src="/instagram.svg" alt="Instagram Icon" className='mr-6' width={20} height={20} />
          <Image src="/tiktok.svg" alt="Tiktok Icon" className='mr-6' width={20} height={20} />
          <Image src="/soundcloud.svg" alt="Sound Cloud Icon" className='mr-6' width={30} height={30} />
        </div>
      </div>
    </>
  )
}
