import React from 'react'
import NextImage from '../../components/Image'
import PrismicButtonLink from '../../components/PrismicButtonLink'
import { PrismicNextImage } from '@prismicio/next'

/**
 * @typedef {import("@prismicio/client").Content.HeroSlice} HeroSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<HeroSlice>} HeroProps
 * @param { HeroProps }
 */
const Hero = ({ slice }) => (
  <section className="background-radial-gradient">
    <div className="px-6 py-12 text-center md:px-12 lg:text-left">
      <div className="container mx-auto xl:px-32">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div
            className={`mt-12 lg:mt-0 ${
              !slice.primary.imageposition ? `order-last` : ``
            } `}
          >
            <h1
              className={`mb-12 text-5xl font-bold tracking-tight text-base-100 md:text-6xl xl:text-7xl ${
                !slice.primary.imageposition ? `text-right` : ``
              }`}
            >
              {slice.primary.headingtext} <br />
              <span className="text-primary">
                {slice.primary.headingcolortext}
              </span>
            </h1>
            <div className="grid grid-flow-col gap-4">
              {slice.items.length > 0 &&
                slice.items.map(button => (
                  <PrismicButtonLink
                    key={button.buttonlink.url}
                    text={button.buttontext}
                    type={button.buttontype}
                    link={button.buttonlink}
                  />
                ))}
            </div>
          </div>
          <div
            className="tooltip tooltip-accent mb-12 text-base-100 lg:mb-0"
            data-tip={slice.primary.imagetooltip}
          >
            <NextImage
              field={slice.primary.image}
              className="w-full rounded-lg shadow-lg transition duration-300 ease-in-out lg:hover:shadow-accent"
              priority="true"
            />
          </div>
        </div>
      </div>
    </div>
  </section>
)

export default Hero
