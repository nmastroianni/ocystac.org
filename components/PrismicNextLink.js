/**
 * IMPORTS
 */
import Link from 'next/link'
/**
 * COMPONENT
 */
const PrismicNextLink = ({ field, children, className }) => {
  switch (field.link_type) {
    case 'Document':
      return (
        <Link href={field.url} className={className}>
          {children}
        </Link>
      )
    default:
      return (
        <a href={field.url} className={className}>
          {children}
        </a>
      )
  }
}
export default PrismicNextLink
