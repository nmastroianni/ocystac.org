import Image from 'next/image'

const NextImage = props => {
  const { field } = props
  return (
    <Image
      src={field.url}
      alt={field.alt || ''}
      className={props.className || ''}
      width={props.width || field.dimensions.width}
      height={props.height || field.dimensions.height}
      priority={props.priority}
    />
  )
}
export default NextImage
