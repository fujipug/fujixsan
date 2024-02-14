export default function Merch() {
  return (
    <div id='merch' className="my-8">
      <div className="mx-auto">
        <div className="relative overflow-hidden bg-gray-900 px-6 py-20">
          <img
            className="absolute inset-0 h-full w-full object-cover brightness-150 saturate-0"
            src="/bio.jpeg"
            alt="Merchandise Background Image"
          />
          <div className="absolute inset-0 bg-gray-900/90 mix-blend-multiply" />
          <div className="absolute -left-80 -top-56 transform-gpu blur-3xl" aria-hidden="true">
            <div
              className="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-r from-[#00223e] to-[#ffa17f]"
              style={{
                clipPath:
                  'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
              }}
            />
          </div>
          <div
            className="hidden md:absolute md:bottom-16 md:left-[50rem] md:block md:transform-gpu md:blur-3xl"
            aria-hidden="true"
          >
            <div
              className="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-r from-[#00223e] to-[#ffa17f] opacity-25"
              style={{
                clipPath:
                  'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
              }}
            />
          </div>
          <div className="relative mx-auto">
            {/* <h1 className="text-3xl">Press Kit</h1> */}
            <div className='flex justify-center mb-4'>
              <img className="h-44 w-auto" src="merch_logo.png" alt="" />
            </div>
            <figure>
              {/* <blockquote className="mt-6 text-lg font-semibold text-white sm:text-xl sm:leading-8">
                  <p>
                    “Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo expedita voluptas culpa sapiente alias
                    molestiae. Numquam corrupti in laborum sed rerum et corporis.”
                  </p>
                </blockquote> */}

              <div className="grid-cols-1 space-x-6 flex justify-center">
                {/* <div className="col-span-1">
                  <button
                    type="button"
                    className="rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
                  >
                    View Press Kit
                  </button>
                </div> */}
                <div className="col-span-1">
                  <button
                    type="button"
                    className="rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
                  >
                    Coming Soon
                  </button>
                </div>
              </div>
              {/* <figcaption className="mt-6 text-base text-white">
                  <div className="font-semibold">Judith Black</div>
                  <div className="mt-1">CEO of Workcation</div>
                </figcaption> */}
            </figure>
          </div>
        </div>
      </div>
    </div>
  )
}
