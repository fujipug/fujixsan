export default function Bio() {
  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2">
        <div className="col-span-1 flex justify-center">
          <img src="/bio.JPEG" className="rounded-lg shadow-xl dark:shadow-gray-800 w-4/5" alt="Fujixsan" />
        </div>
        <div className="col-span-1 mt-4 sm:mt-0">
          <div className='flex justify-center sm:block'>
            <h2 className='text-3xl sm:text-5xl font-bold'>Get to know Fujixsan</h2>
          </div>
          <br />
          <p className="text-xl sm:text-2xl text-center sm:text-left">Fujixsan is a dynamic DJ based in Los Angeles, seamlessly blending influences from artists like Matroda, Chris Lake,
            Duke Dumont, and Noizu. Their music resonates in both Los Angeles and Mexico City, where they have showcased their prowess
            in House, Tech House, and electronic genres. With a knack for crafting immersive beats, they have left an indelible mark on
            diverse audiences through electrifying performances.</p>
        </div>
      </div>
    </>
  )
}