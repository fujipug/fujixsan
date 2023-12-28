import Image from 'next/image'
import Link from 'next/link'
import Navbar from './components/navbar'
import Socials from './components/socials'

export default function Home() {
  return (
    <>
      {/* <video
        id="myVideo"
        loop
        autoPlay
        muted
      >
        <source src="/Main_Glitch.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video> */}

      <div className="sm:h-screen sm:w-screen sm:bg-[url('/fujixsan-home.JPEG')] sm:bg-cover">
        <Image src="/fujixsan-logo.png" className='hidden sm:block' alt="Fujixsan_Logo" width={500} height={500} />

        <div className=''>
          <Image src="/fujixsan-logo.png" className='block sm:hidden mx-auto' alt="Fujixsan_Logo" width={300} height={300} />
          <Image src="/fujixsan-home.JPEG" className='block sm:hidden -mt-12 mb-6' alt="Fujixsan_Logo" width={500} height={500} />
        </div>

        <Navbar />
        <div className='ml-5 mt-5'>
          <Socials />
        </div>
      </div>
    </>
  )
}
