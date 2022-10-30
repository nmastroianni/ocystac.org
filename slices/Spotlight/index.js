import React from 'react'
import Image from 'next/image'
import Icon from '../../components/Icon'
import { PrismicLink, PrismicRichText } from '@prismicio/react'
import { PrismicNextImage } from '@prismicio/next'

/**
 * @typedef {import("@prismicio/client").Content.SpotlightSlice} SpotlightSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<SpotlightSlice>} SpotlightProps
 * @param { SpotlightProps }
 */
const Spotlight = ({ slice }) => {
  const {
    items,
    primary: {
      image,
      imagetooltip,
      imagelocation,
      heading,
      firstcontentsection,
      secondcontentsection,
    },
    variation,
  } = slice

  const templates = {
    heading2: ({ node, children }) => {
      return (
        <h2
          className={`mb-6 text-center text-2xl font-bold ${
            variation === 'primary'
              ? `text-neutral`
              : variation === 'secondary'
              ? `text-accent`
              : variation === 'accent'
              ? `text-neutral`
              : `text-primary`
          } lg:text-left lg:text-3xl xl:text-4xl`}
        >
          {children}
        </h2>
      )
    },
    heading3: ({ node, children }) => {
      return (
        <h3
          className={`text-xl lg:text-2xl xl:text-3xl ${
            variation === 'primary'
              ? `text-neutral`
              : variation === 'secondary'
              ? `text-accent`
              : variation === 'accent'
              ? `text-neutral`
              : `text-primary`
          }`}
        >
          {children}
        </h3>
      )
    },
    paragraph: ({ node, children }) => {
      return (
        <p
          className={`prose ${
            variation === 'primary'
              ? `text-base-100`
              : variation === 'secondary'
              ? `text-base-100`
              : variation === 'accent'
              ? `text-gray-800`
              : `text-base-100`
          } lg:prose-lg xl:prose-xl`}
        >
          {children}
        </p>
      )
    },
    image: ({ node, children }) => {
      return (
        <div className="aspect-w-4 aspect-h-3 my-4 max-w-[700px] md:my-6 lg:my-8">
          <PrismicNextImage field={node} className="rounded-lg" />
        </div>
      )
    },
    hyperlink: ({ node, children }) => {
      return (
        <PrismicLink
          field={node.data}
          className={` ${
            variation === 'primary'
              ? `text-base-100`
              : variation === 'secondary'
              ? `text-base-100`
              : variation === 'accent'
              ? `text-neutral`
              : `text-base-100`
          } `}
        >
          {children}
        </PrismicLink>
      )
    },
    strong: ({ node, children }) => (
      <span
        className={`font-bold ${
          variation === 'primary'
            ? `text-base-100`
            : variation === 'secondary'
            ? `text-base-100`
            : variation === 'accent'
            ? `text-neutral`
            : `text-base-100`
        }`}
      >
        {children}
      </span>
    ),
    embed: ({ node, children }) => {
      return (
        <div className="mx-auto max-w-screen-sm overflow-hidden rounded-lg shadow-xl">
          <div
            className="aspect-w-16 aspect-h-9"
            dangerouslySetInnerHTML={{ __html: node.oembed.html }}
          />
        </div>
      )
    },
    list: ({ node, children }) => {
      return (
        <ul className="ml-12 list-disc md:text-lg lg:text-xl">{children}</ul>
      )
    },
    oList: ({ node, children }) => {
      return (
        <ol className="ml-12 list-decimal md:text-lg lg:text-xl">{children}</ol>
      )
    },
    listItem: ({ node, children }) => {
      return <li className="my-4">{children}</li>
    },
    oListItem: ({ node, children }) => {
      return <li className="my-4">{children}</li>
    },
  }
  return (
    <section className="p-4 md:p-6  lg:p-8 xl:p-10">
      <div
        className={`container mx-auto flex flex-wrap ${
          imagelocation ? `flex-row-reverse` : ``
        }`}
      >
        <div className="mb-12 w-full shrink-0 grow-0 basis-auto lg:mb-0 lg:w-5/12">
          <div
            className={`tooltip tooltip-accent flex lg:my-12`}
            data-tip={imagetooltip}
          >
            <PrismicNextImage
              field={image}
              className={`z-10 w-full rounded-lg shadow-lg ${
                imagelocation ? `lg:mr-6 xl:mr-10` : `lg:ml-6 xl:ml-10`
              }`}
            />
          </div>
        </div>
        <div
          className={`w-full shrink-0 grow-0 basis-auto  lg:w-7/12 ${
            imagelocation ? `lg:-mr-6 xl:-mr-10` : `lg:-ml-6 xl:-ml-10`
          }`}
        >
          <div
            className={`flex h-full items-center rounded-lg ${
              variation === 'primary'
                ? `bg-gradient-to-br from-primary to-orange-400`
                : variation === 'secondary'
                ? `bg-gradient-to-br from-secondary to-indigo-900`
                : variation === 'accent'
                ? `bg-accent`
                : `bg-gradient-to-br from-neutral to-gray-700`
            } p-6 text-white ${
              imagelocation ? `lg:pl-12` : `lg:pl-12`
            } lg:text-left`}
          >
            <div
              className={`mx-auto ${imagelocation ? `lg:pr-12` : `lg:pl-12`}`}
            >
              <PrismicRichText field={heading} components={templates} />
              <PrismicRichText
                field={firstcontentsection}
                components={templates}
              />

              <div className="mx-auto my-6 flex flex-col flex-wrap space-y-4 md:flex-row md:justify-evenly md:space-y-0 xl:justify-evenly">
                {items.length > 0 &&
                  items.map(item => {
                    return (
                      <p
                        key={item.itemtext}
                        className={`tooltip flex items-center md:mx-0 md:mb-2 lg:mb-0 ${
                          variation === 'primary'
                            ? `text-base-100`
                            : variation === 'secondary'
                            ? `text-base-100`
                            : variation === 'accent'
                            ? `text-gray-800`
                            : `text-base-100`
                        }`}
                        data-tip={item.itemtooltip}
                      >
                        <Icon name={item.icon} className="mr-2 h-4 w-4" />
                        {item.itemtext}
                      </p>
                    )
                  })}
              </div>
              <div className={`text-base-100`}>
                <PrismicRichText
                  field={secondcontentsection}
                  components={templates}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Spotlight
