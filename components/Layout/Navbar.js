import Image from 'next/image'
import Link from 'next/link'
import Headroom from 'react-headroom'
import { PrismicLink } from '@prismicio/react'
import { components } from '../../slices'
import { SliceZone } from '@prismicio/react'

const Navbar = ({ largebuttonlink, largebuttontext, slices }) => {
  return (
    <Headroom>
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
                    return (
                      <li key={slice.id}>
                        <PrismicLink
                          field={slice.primary.linktarget}
                          className="hover:bg-blue-800"
                        >
                          {slice.primary.linktext}
                        </PrismicLink>
                      </li>
                    )
                  } else {
                    return (
                      <li key={slice.id} tabIndex={0}>
                        <a className="justify-between hover:bg-blue-800">
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
                        </a>
                        <ul className="bg-secondary p-2">
                          {slice.items.length > 0 &&
                            slice.items.map(subitem => (
                              <li key={subitem.linktarget.url}>
                                <PrismicLink
                                  field={subitem.linktarget}
                                  className="hover:bg-orange-600"
                                >
                                  {subitem.linktext}
                                </PrismicLink>
                              </li>
                            ))}
                        </ul>
                      </li>
                    )
                  }
                })}
            </ul>
          </div>
          <div className="hidden lg:inline-block">
            <Link href="/">
              <Image
                src="/stacSquareLogo.png"
                alt=""
                width={120}
                height={120}
              />
              <span className="sr-only">Return to Homepage</span>
            </Link>
          </div>
        </div>
        {/* DESKTOP MENU */}
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal p-0">
            <SliceZone slices={slices} components={components} />
          </ul>
        </div>
        {/* END DESKTOP MENU */}
        <div className="navbar-end">
          {largebuttonlink.url && (
            <PrismicLink
              field={largebuttonlink}
              className="btn-primary btn hidden hover:bg-orange-600 lg:inline-flex"
            >
              {largebuttontext}
            </PrismicLink>
          )}
          <div className="lg:hidden">
            <Image src="/stacSquareLogo.png" alt="" width={120} height={120} />
          </div>
        </div>
      </div>
    </Headroom>
  )
}
export default Navbar
