export default function Music() {
  return (
    <>
      <div id='music' className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 mb-20">
        <div className='flex justify-center mb-4'>
          <img className="h-44 w-auto" src="music_logo.png" alt="" />
        </div>
        <div className="grid grid-cols-1 gap-y-4 sm:grid-cols-3 sm:gap-x-4">
          <div className="col-span-1">
            <iframe
              width="100%"
              height="450"
              scrolling="no"
              allow="autoplay"
              src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1106201566&color=%23242126&auto_play=false&hide_related=true&show_comments=false&show_user=true&show_reposts=false&show_teaser=false&visual=true">
            </iframe>
          </div>
          <div className="col-span-1">
            <iframe
              width="100%"
              height="450"
              scrolling="no"
              allow="autoplay"
              src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1039799032&color=%23242126&auto_play=false&hide_related=true&show_comments=false&show_user=true&show_reposts=false&show_teaser=false&visual=true">
            </iframe>
          </div>
          <div className="col-span-1">
            <iframe
              width="100%"
              height="450"
              scrolling="no"
              allow="autoplay"
              src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1053273817&color=%23242126&auto_play=false&hide_related=true&show_comments=false&show_user=true&show_reposts=false&show_teaser=false&visual=true">
            </iframe>
          </div>
        </div>

        <div className="my-6">
          <h2 className="text-3xl font-semibold">Recent Mixes</h2>
        </div>

        <iframe
          width="100%"
          height="166"
          scrolling="no"
          frameBorder="no"
          allow="autoplay"
          src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1725937473&color=%23222024&auto_play=false&hide_related=true&show_comments=false&show_user=true&show_reposts=false&show_teaser=false">
        </iframe>

        <div className="my-6">
          <h2 className="text-3xl font-semibold">Dark Theme Radio Mixes</h2>
        </div>

        <iframe
          width="100%"
          height="450"
          scrolling="no"
          frameBorder="no"
          allow="autoplay"
          src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/1028293042&color=%23222024&auto_play=false&hide_related=true&show_comments=false&show_user=true&show_reposts=false&show_teaser=false">
        </iframe>
      </div >
    </>
  )
}