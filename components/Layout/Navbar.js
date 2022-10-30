import Image from 'next/image'
import Link from 'next/link'
import Headroom from 'react-headroom'
import { PrismicLink } from '@prismicio/react'
import { components } from '../../slices'
import { SliceZone } from '@prismicio/react'
import { PrismicNextImage } from '@prismicio/next'
import PrismicNextLink from '../PrismicNextLink'

const Navbar = ({ largebuttonlink, largebuttontext, logo, slices }) => {
  return (
    <Headroom style={{ zIndex: '11' }}>
      <div className="navbar px-4 md:px-6 lg:px-8 xl:px-10">
        <div className="navbar-start">
          <div className="dropdown">
            <label
              tabIndex={0}
              className="btn-primary btn text-base-100 lg:hidden"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="dropdown-content menu rounded-box menu-compact mt-3 w-52 bg-primary p-2 text-base-100 shadow"
            >
              {slices.length > 0 &&
                slices.map(slice => {
                  if (slice.variation === 'default') {
                    console.log(
                      'NAVBAR default item ---> ',
                      slice.primary.linktarget
                    )
                    return (
                      <li key={slice.id}>
                        <PrismicNextLink
                          field={slice.primary.linktarget}
                          className="text-base hover:bg-blue-800"
                        >
                          {slice.primary.linktext}
                        </PrismicNextLink>
                      </li>
                    )
                  } else {
                    return (
                      <li key={slice.id} tabIndex={0}>
                        <span className="justify-between text-base hover:bg-blue-800">
                          {slice.primary.buttontext}
                          <svg
                            className="fill-current"
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                          >
                            <path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z" />
                          </svg>
                        </span>
                        <ul className="bg-secondary p-2">
                          {slice.items.length > 0 &&
                            slice.items.map(subitem => {
                              console.log('NAVBAR subitem --> ', subitem)
                              return (
                                <li key={subitem.linktarget.url}>
                                  <PrismicNextLink field={subitem.linktarget}>
                                    {subitem.linktext}
                                  </PrismicNextLink>
                                </li>
                              )
                            })}
                        </ul>
                      </li>
                    )
                  }
                })}
            </ul>
          </div>
          <div className="hidden lg:inline-block">
            <Link href="/">
              <PrismicNextImage field={logo} width={120} height={120} />
              {/* <Image
                src="/stacSquareLogo.png"
                alt=""
                width={120}
                height={120}
              /> */}
              <span className="sr-only">Return to Homepage</span>
            </Link>
          </div>
        </div>
        {/* DESKTOP MENU */}
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal p-0 text-xl">
            <SliceZone slices={slices} components={components} />
          </ul>
        </div>
        {/* END DESKTOP MENU */}
        <div className="navbar-end">
          {largebuttonlink.url && (
            <PrismicNextLink
              field={largebuttonlink}
              className="btn-primary btn hidden hover:bg-orange-600 lg:inline-flex"
            >
              {largebuttontext}
            </PrismicNextLink>
          )}
          <div className="lg:hidden">
            <PrismicNextImage field={logo} width={120} height={120} />
          </div>
        </div>
      </div>
    </Headroom>
  )
}
export default Navbar
