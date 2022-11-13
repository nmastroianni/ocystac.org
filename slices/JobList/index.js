import React from 'react'
import * as prismicH from '@prismicio/helpers'
import { PrismicRichText } from '@prismicio/react'
// import { PrismicNextImage } from '@prismicio/next'
import Link from 'next/link'
import NextImage from '../../components/Image'

/**
 * @typedef {import("@prismicio/client").Content.JobListSlice} JobListSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<JobListSlice>} JobListProps
 * @param { JobListProps }
 */
const JobList = ({ slice }) => {
  const { id, items, variation } = slice
  const templates = {
    paragraph: ({ children }) => <p className="text-lg">{children}</p>,
  }
  return (
    <section className="my-4 md:my-6 lg:my-8 xl:my-10">
      <div className="mx-auto grid max-w-screen-sm gap-y-6 divide-y px-4 md:gap-y-8 lg:gap-y-10">
        {items.length > 0 &&
          items.map(item => {
            const { jobimage, joblink } = item
            return (
              <div
                key={joblink.id}
                className="card relative bg-base-100 shadow-xl"
              >
                <Link
                  href={joblink.url}
                  className="text-base-100"
                  tabIndex={-1}
                >
                  <NextImage field={jobimage} className="rounded-t-2xl" />
                </Link>

                <div className="card-body shrink-0">
                  <h2 className="text-3xl md:text-4xl">
                    {`${prismicH.asText(joblink.data.title)}`}
                  </h2>
                  <PrismicRichText
                    field={joblink.data.description}
                    components={templates}
                  />
                  <div className="card-actions justify-end">
                    <Link
                      href={joblink.url}
                      className="btn-secondary btn text-base-100"
                    >
                      <p>
                        {' '}
                        Learn about the <br />
                        {`${prismicH.asText(joblink.data.title)} position`}
                      </p>
                    </Link>
                  </div>
                </div>
              </div>
            )
          })}
      </div>
    </section>
  )
}

export default JobList
