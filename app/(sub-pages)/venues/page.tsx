import Image from 'next/image'
import Link from 'next/link'
export default function Venues() {
  const items = [
    { id: 1, name: 'Tenants of the Trees', location: 'Los Angeles', imageUrl: '/tenants.jpeg', url: 'https://www.instagram.com/tenantsofthetrees/?hl=en' },
    { id: 2, name: 'The Short Stop', location: 'Los Angeles', imageUrl: '/shortstop.jpeg', url: 'https://www.instagram.com/theshortstopechopark/?hl=en' },
    { id: 3, name: 'Red Line', location: 'Los Angeles', imageUrl: '/redline.jpeg', url: 'https://www.instagram.com/redlinedtla/reels/' },
    { id: 4, name: 'Gusto Green', location: 'Los Angeles', imageUrl: 'gustogreen.jpeg' },
    { id: 5, name: 'Casino Shanghai', location: 'Mexico City', imageUrl: '/shanghai.jpeg', url: 'https://www.instagram.com/casino.shanghai/' },
    { id: 6, name: 'Flow', location: 'Texcoco', imageUrl: 'flow.jpeg', url: 'https://www.instagram.com/flow_clubmx/' },
    { id: 7, name: 'Mushroom', location: 'Texcoco', imageUrl: 'mushroom.jpeg', url: 'https://www.instagram.com/mushroom_diveclub/' },
    { id: 8, name: 'Party and Art', location: 'Texcoco', imageUrl: 'partyandart.jpeg', url: 'https://www.instagram.com/partyandartclub/' },
    { id: 9, name: 'Disco Dopamine', location: 'Mexico City', imageUrl: 'disco-dopamine.jpeg', url: 'https://www.instagram.com/discodopamine.mx/' },
    { id: 10, name: 'Bartola', location: 'Mexico City', imageUrl: 'bartola.jpeg', url: 'https://www.instagram.com/bartola_steakandgrill/' },
    { id: 10, name: 'Club Monroe', location: 'Mexico City', imageUrl: 'monroe.jpeg', url: 'https://www.instagram.com/club.antrosur/' },
    { id: 11, name: 'Sin Events', location: 'Mexico City', imageUrl: 'sin.jpg', url: 'https://www.instagram.com/sin.cdmx/' },
    { id: 12, name: 'Departamento', location: 'Mexico City', imageUrl: 'departamento.jpg', url: 'https://www.instagram.com/departamento_studiobar/' },
    { id: 13, name: 'Club Maria Sabina', location: 'Mexico City', imageUrl: 'sabina.jpg', url: 'https://www.instagram.com/clubmariasabina/' },
    { id: 13, name: 'La Xampa', location: 'Mexico City', imageUrl: 'laxampa.jpg', url: 'https://www.instagram.com/la_xampa/' },
    { id: 13, name: 'Florida', location: 'Mexico City', imageUrl: 'florida.jpg', url: 'https://www.instagram.com/florida.nightclub/' },
  ]

  return (
    <>
      <div id='venues' className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 mb-20">
        <div className='flex justify-center mb-4'>
          <img className="h-44 w-auto" src="venues_logo.png" alt="" />
        </div>
        <ul role="list" className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3">
          {items.map((item) => (
            <li
              key={item.id}
              className="col-span-1 flex flex-col divide-y divide-gray-200 rounded-lg bg-gray-700 text-center shadow"
            >
              <div className="flex flex-1 flex-col p-8">
                <img className="mx-auto h-32 w-32 flex-shrink-0 rounded-full" src={item.imageUrl} alt="" />
                <h3 className="mt-6 text-xl text-white">{item.name}</h3>
                <dl className="mt-1 flex flex-grow flex-col justify-between">
                  <dt className="sr-only">Title</dt>
                  <dd className="text-med text-gray-400">{item.location}</dd>
                </dl>
              </div>
              <div>
                <div className="-mt-px flex divide-x divide-gray-200">
                  {item.url ?
                    <Link href={item.url} target='_blank' className="relative inline-flex w-0 flex-1 items-center justify-center gap-x-3 rounded-br-lg border border-transparent py-4"
                    >
                      <Image src="/instagram_purp.svg" alt="Instagram Icon" width={20} height={20} />
                    </Link>
                    :
                    <p className='text-med relative inline-flex w-0 flex-1 items-center justify-center gap-x-3 rounded-br-lg border border-transparent py-4 text-md font-semibold text-gray-300'>Closed</p>
                  }
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </>
  )
}