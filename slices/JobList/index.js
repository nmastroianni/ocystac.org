import React from 'react'
import * as prismicH from '@prismicio/helpers'
import { PrismicRichText } from '@prismicio/react'
import { PrismicNextImage } from '@prismicio/next'
import Link from 'next/link'

/**
 * @typedef {import("@prismicio/client").Content.JobListSlice} JobListSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<JobListSlice>} JobListProps
 * @param { JobListProps }
 */
const JobList = ({ slice }) => {
  const { id, items, variation } = slice
  console.log('JobList says ---> ', slice)
  const templates = {
    paragraph: ({ children }) => <p className="text-lg">{children}</p>,
  }
  return (
    <section className="">
      <div className="mx-auto max-w-screen-sm px-4">
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
                  <PrismicNextImage
                    field={jobimage}
                    width={jobimage.dimensions.width}
                    height={jobimage.dimensions.height}
                  />
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
                      Learn About This Job
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
