import Icon from './Icon'

const EventCard = ({ summary, start, end, description, location }) => {
  if (description) {
    description = description.replace(/<\/?html-blob>/g, '')
  }
  return (
    <article className="my-4 mx-auto flex max-w-screen-sm flex-col rounded-lg border">
      <aside className="flex flex-col justify-center rounded-t-lg bg-secondary py-4 text-center text-xl text-base-100 md:text-2xl lg:text-3xl">
        {new Date(start.dateTime).toLocaleDateString('en-US', {
          month: 'long',
          weekday: 'long',
          day: 'numeric',
          year: 'numeric',
        })}
      </aside>
      <div>
        <h2 className="my-3 text-center text-lg font-medium text-secondary md:text-xl lg:text-2xl">
          {summary}
        </h2>
        {description && (
          <div className="prose mx-auto px-4">
            <span className="font-semibold text-secondary">
              Event Details:{' '}
            </span>
            <br />
            <div dangerouslySetInnerHTML={{ __html: description }} />
            {/* {description} */}
          </div>
        )}
        {location && (
          <div className="prose mx-auto px-4">
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
