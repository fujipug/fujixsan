import Image from 'next/image'
export default function Bio() {
  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 align-middle">
        <div className="col-span-1">
          <img src="/bio.jpeg" className="rounded-lg shadow-xl dark:shadow-gray-800" alt="Fujixsan" />
        </div>
        <div className="col-span-1">
          <h2 className='text-5xl font-bold'>Get to know Fujixsan</h2>
          <br />
          <p className="text-2xl">Fujixsan is a dynamic DJ based in Los Angeles, seamlessly blending influences from artists like Matroda, Chris Lake,
            Duke Dumont, and Noizu. Their music resonates in both Los Angeles and Mexico City, where they have showcased their prowess
            in House, Tech House, and electronic genres. With a knack for crafting immersive beats, they have left an indelible mark on
            diverse audiences through electrifying performances.</p>
        </div>
      </div>
    </>
  )
}