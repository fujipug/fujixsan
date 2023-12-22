export default function Music() {
  return (
    <>
      <div className="grid grid-cols-3 gap-x-4">
        <div className="col-span-1">
          <iframe
            width="100%"
            height="450"
            scrolling="no"
            // frameborder="no"
            allow="autoplay"
            src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1106201566&color=%23242126&auto_play=false&hide_related=true&show_comments=false&show_user=true&show_reposts=false&show_teaser=false&visual=true">
          </iframe>
        </div>
        <div className="col-span-1">
          <iframe
            width="100%"
            height="450"
            scrolling="no"
            // frameborder="no"
            allow="autoplay"
            src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1039799032&color=%23242126&auto_play=false&hide_related=true&show_comments=false&show_user=true&show_reposts=false&show_teaser=false&visual=true">
          </iframe>
        </div>
        <div className="col-span-1">
          <iframe
            width="100%"
            height="450"
            scrolling="no"
            // frameborder="no"
            allow="autoplay"
            src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1053273817&color=%23242126&auto_play=false&hide_related=true&show_comments=false&show_user=true&show_reposts=false&show_teaser=false&visual=true">
          </iframe>
        </div>
      </div>
    </>
  )
}