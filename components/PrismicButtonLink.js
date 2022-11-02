import PrismicNextLink from './PrismicNextLink'

const PrismicButtonLink = ({ link, type, text }) => {
  switch (type) {
    case 'Primary':
      return (
        <PrismicNextLink
          field={link}
          className={`btn-primary btn text-neutral hover:bg-orange-600`}
        >
          {text}
        </PrismicNextLink>
      )
    case 'Accent':
      return (
        <PrismicNextLink
          field={link}
          className={`btn-accent btn text-secondary hover:text-base-100`}
        >
          {text}
        </PrismicNextLink>
      )
    case 'Ghost':
      return (
        <PrismicNextLink
          field={link}
          className={`btn-ghost btn text-accent hover:bg-base-100 hover:text-secondary`}
        >
          {text}
        </PrismicNextLink>
      )
    default:
      return (
        <PrismicNextLink
          field={link}
          className={`btn-secondary btn text-base-100 hover:bg-blue-700`}
        >
          {text}
        </PrismicNextLink>
      )
  }
}

export default PrismicButtonLink
