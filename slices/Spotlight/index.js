import React from 'react'
import Image from 'next/image'
import Icon from '../../components/Icon'
import { PrismicRichText } from '@prismicio/react'
import { PrismicNextImage } from '@prismicio/next'

/**
 * @typedef {import("@prismicio/client").Content.SpotlightSlice} SpotlightSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<SpotlightSlice>} SpotlightProps
 * @param { SpotlightProps }
 */
const Spotlight = ({ slice }) => {
  console.log('spotlight---> ', slice)
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
        <h2 className="mb-6 text-4xl font-bold text-primary">{children}</h2>
      )
    },
    heading3: ({ node, children }) => {
      return <h3 className="text-3xl font-light text-accent">{children}</h3>
    },
    paragraph: ({ node, children }) => {
      return (
        <p className="prose text-base-100 lg:prose-lg xl:prose-xl">
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
  }
  return (
    <section className="my-16 p-4 md:p-6  lg:p-8 xl:p-10">
      <div
        className={`container mx-auto flex flex-wrap ${
          imagelocation ? `flex-row-reverse` : ``
        }`}
      >
        <div className="mb-12 w-full shrink-0 grow-0 basis-auto lg:mb-0 lg:w-5/12">
          <div
            className="tooltip tooltip-primary flex lg:py-12"
            data-tip={imagetooltip}
          >
            <PrismicNextImage
              field={image}
              className="z-10 w-full rounded-lg shadow-lg lg:ml-6 xl:ml-10"
            />
          </div>
        </div>
        <div className="w-full shrink-0 grow-0 basis-auto lg:-ml-6 lg:w-7/12 xl:-ml-10">
          <div className="flex h-full items-center rounded-lg bg-neutral p-6 text-white lg:pl-12 lg:text-left">
            <div className="mx-auto lg:pl-12">
              <PrismicRichText field={heading} components={templates} />
              <PrismicRichText
                field={firstcontentsection}
                components={templates}
              />

              <div className="mx-auto my-6 flex flex-col md:flex-row md:justify-around xl:justify-start">
                {items.length > 0 &&
                  items.map(item => {
                    return (
                      <p
                        key={item.itemtext}
                        className="mx-auto mb-4 flex items-center md:mx-0 md:mb-2 lg:mb-0 xl:mr-20"
                      >
                        <Icon name="Award" className="mr-2 h-4 w-4" />
                        {item.itemtext}
                      </p>
                    )
                  })}
              </div>

              <PrismicRichText
                field={secondcontentsection}
                components={templates}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Spotlight
