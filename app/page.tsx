import Image from 'next/image'
import Link from 'next/link'
import Navbar from './components/navbar'

export default function Home() {
  return (
    <>
      <div className="hidden lg:block h-screen w-screen bg-[url('/fujixsan-home.JPEG')] bg-cover">
        <Image src="/fujixsan-logo.png" alt="Fujixsan_Logo" width={500} height={500} />
        <Navbar />

        <div className='ml-5 mt-5 flex items-center'>
          <Link href="https://www.instagram.com/fujixsan_/" target='_blank'>
            <Image src="/instagram.svg" alt="Instagram Icon" className='mr-6' width={20} height={20} />
          </Link>
          <Link href="https://www.tiktok.com/@fujixsan/" target='_blank'>
            <Image src="/tiktok.svg" alt="Tiktok Icon" className='mr-6' width={20} height={20} />
          </Link>
          <Link href="https://soundcloud.com/fujixsan/" target='_blank'>
            <Image src="/soundcloud.svg" alt="Sound Cloud Icon" className='mr-6' width={30} height={30} />
          </Link>
        </div>
      </div>

      <div className="block sm:hidden h-screen">
        <div className='z-10 -mt-10'>
          <Image src="/fujixsan-logo.png" alt="Fujixsan_Logo" width={500} height={500} />
        </div>
        <Image src="/fujixsan-home.JPEG" alt="Fujixsan_Logo" layout='fill' objectFit='contain' className='-z-10' />

        {/* <div className="text-3xl flex w-full">
          <Link href="/music" className="text-gray-300 px-2 hover:text-white hover:bg-gray-600 hover:bg-opacity-70">Music</Link>
          <Link href="/shows" className="text-gray-300 px-2 hover:text-white hover:bg-gray-600 hover:bg-opacity-70">Shows</Link>
          <Link href="/bio" className="text-gray-300 px-2 hover:text-white hover:bg-gray-600 hover:bg-opacity-70">Bio</Link>
          <Link href="/press-kit" className="text-gray-300 px-2 hover:text-white hover:bg-gray-600 hover:bg-opacity-70">Press Kit</Link>
          <Link href="/past-venues" className="text-gray-300 px-2 hover:text-white hover:bg-gray-600 hover:bg-opacity-70">Venues</Link>
          <Link href="/merch" className="text-gray-300 px-2 hover:text-white hover:bg-gray-600 hover:bg-opacity-70">Merch</Link>
        </div> */}

        <div className="absolute bottom-0">
          <div className="grid grid-cols-3 gap-3 mt-44 text-2xl">
            <Link href="/music" className="text-gray-300 px-2 hover:text-white hover:bg-gray-600 hover:bg-opacity-70">Music</Link>
            <Link href="/shows" className="text-gray-300 px-2 hover:text-white hover:bg-gray-600 hover:bg-opacity-70">Shows</Link>
            <Link href="/bio" className="text-gray-300 px-2 hover:text-white hover:bg-gray-600 hover:bg-opacity-70">Bio</Link>
            <Link href="/press-kit" className="text-gray-300 px-2 hover:text-white hover:bg-gray-600 hover:bg-opacity-70">Press Kit</Link>
            <Link href="/past-venues" className="text-gray-300 px-2 hover:text-white hover:bg-gray-600 hover:bg-opacity-70">Venues</Link>
            <Link href="/merch" className="text-gray-300 px-2 hover:text-white hover:bg-gray-600 hover:bg-opacity-70">Merch</Link>
          </div>
        </div>
      </div>
    </>
  )
}
