import Epk from './(sub-pages)/epk/page'
import Merch from './(sub-pages)/merch/page'
import Music from './(sub-pages)/music/page'
import Shows from './(sub-pages)/shows/page'
import Venues from './(sub-pages)/venues/page'
import Footer from './components/footer'

export default function Home() {
  return (
    <>
      <div id='home' className='css-selector flex justify-center py-24 sm:py-0 sm:h-screen'>
        <div className='drop-shadow-xl w-10/12 my-auto'>
          <img src="/fujixsan-logo.png" alt="Fujixsan" className="hidden sm:block fixed aspect-[3/2] object-cover lg:aspect-auto z-10 h-1/3 left-6" />
          <img src='/fujixsan-home.jpeg' alt="Fujixsan" className="aspect-[3/2] object-cover lg:aspect-auto rounded-lg" />
        </div>
      </div>

      <Shows />
      <Epk />
      <Music />
      <Merch />
      <Venues />
      <Footer />
    </>
  )
}
