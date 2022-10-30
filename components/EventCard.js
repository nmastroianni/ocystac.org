import Icon from './Icon'

const EventCard = ({ summary, start, end, description, location }) => {
  return (
    <article className="my-4 mx-auto grid max-w-screen-sm grid-rows-3 rounded-lg border">
      <aside className="row-span-1 rounded-t-lg bg-secondary py-4 text-center text-xl text-base-100 md:text-2xl lg:text-3xl">
        {new Date(start.dateTime).toLocaleDateString('en-US', {
          month: 'long',
          weekday: 'long',
          day: 'numeric',
          year: 'numeric',
        })}
      </aside>
      <div className="row-span-2">
        <h2 className="my-3 text-center text-lg font-medium text-secondary md:text-xl lg:text-2xl">
          {summary}
        </h2>
        {description && (
          <p className="prose mx-auto">
            <span className="font-semibold text-secondary">
              Event Details:{' '}
            </span>
            <br />
            {description}
          </p>
        )}
        {location && (
          <div className="prose mx-auto">
            <p>
              <span className="font-semibold text-secondary">Location: </span>{' '}
              <br />
              <span>{location}</span>
            </p>
            <a
              href={`https://maps.google.com/?daddr=${location}`}
              className="btn-secondary btn my-4 mx-auto flex w-48 items-center justify-center text-base-100 no-underline"
            >
              <Icon name="MapMarker" className="mr-4 text-primary" />
              Get Directions
            </a>
          </div>
        )}
      </div>
    </article>
  )
}
export default EventCard
