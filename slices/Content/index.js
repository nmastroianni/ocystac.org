import React from 'react'
import { PrismicRichText } from '@prismicio/react'
import { PrismicNextImage } from '@prismicio/next'
import PrismicNextLink from '../../components/PrismicNextLink'

/**
 * @typedef {import("@prismicio/client").Content.ContentSlice} ContentSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<ContentSlice>} ContentProps
 * @param { ContentProps }
 */
const Content = ({ slice }) => {
  const templates = {
    heading2: ({ node, children }) => {
      return (
        <h2
          className={`mb-6 text-center text-2xl font-bold text-secondary lg:self-start lg:text-left lg:text-3xl xl:text-4xl`}
        >
          {children}
        </h2>
      )
    },
    paragraph: ({ node, children }) => {
      return <p>{children}</p>
    },
    hyperlink: ({ node, children }) => {
      return (
        <PrismicNextLink field={node.data} className="text-primary">
          {children}
        </PrismicNextLink>
      )
    },
    image: ({ node, children }) => {
      return (
        <div
          className="not-prose tooltip tooltip-accent my-4"
          data-tip={node.alt}
        >
          <a href={node.url} target="_blank" rel="noreferrer">
            <PrismicNextImage field={node} className="rounded-lg" />
          </a>
        </div>
      )
    },
    embed: ({ node, children }) => {
      return (
        <div className="mx-auto max-w-screen-sm overflow-hidden rounded shadow-xl">
          <div
            className="aspect-w-16 aspect-h-9"
            dangerouslySetInnerHTML={{ __html: node.oembed.html }}
          />
        </div>
      )
    },
  }
  return (
    <section className="prose prose-gray mx-auto flex flex-col items-center px-3 py-4 md:px-6 md:py-6 md:prose-lg lg:py-8 lg:prose-xl xl:py-10 xl:prose-2xl">
      <PrismicRichText field={slice.primary.content} components={templates} />
    </section>
  )
}

export default Content
