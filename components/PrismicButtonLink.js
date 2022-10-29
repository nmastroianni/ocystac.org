import { PrismicLink } from '@prismicio/react'

const PrismicButtonLink = ({ link, type, text }) => {
  switch (type) {
    case 'Primary':
      return (
        <PrismicLink
          field={link}
          className={`btn-primary btn text-base-100 hover:bg-orange-600`}
        >
          {text}
        </PrismicLink>
      )
    case 'Accent':
      return (
        <PrismicLink
          field={link}
          className={`btn-accent btn text-secondary hover:text-base-100`}
        >
          {text}
        </PrismicLink>
      )
    case 'Ghost':
      return (
        <PrismicLink
          field={link}
          className={`btn-ghost btn text-accent hover:bg-base-100 hover:text-secondary`}
        >
          {text}
        </PrismicLink>
      )
    default:
      return (
        <PrismicLink
          field={link}
          className={`btn-secondary btn text-base-100 hover:bg-blue-700`}
        >
          {text}
        </PrismicLink>
      )
  }
}

export default PrismicButtonLink
