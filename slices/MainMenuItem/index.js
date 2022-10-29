import React from 'react'
import { PrismicRichText, PrismicLink } from '@prismicio/react'

/**
 * @typedef {import("@prismicio/client").Content.MainMenuItemSlice} MainMenuItemSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<MainMenuItemSlice>} MainMenuItemProps
 * @param { MainMenuItemProps }
 */
const MainMenuItem = ({ slice }) => {
  switch (slice.variation) {
    case 'mainMenuItemWithDropdown':
      return (
        <li tabIndex={0}>
          <a className="hover:bg-blue-800">
            {slice.primary.buttontext}
            <svg
              className="fill-current"
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
            >
              <path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" />
            </svg>
          </a>
          <ul className="bg-primary p-2">
            {slice.items.length > 0 &&
              slice.items.map(item => (
                <li key={item.linktarget.url}>
                  <PrismicLink
                    field={item.linktarget}
                    className="hover:bg-orange-600"
                  >
                    {item.linktext}
                  </PrismicLink>
                </li>
              ))}
          </ul>
        </li>
      )
    default:
      return (
        <li>
          <PrismicLink
            field={slice.primary.linktarget}
            className="hover:bg-blue-800"
          >
            {slice.primary.linktext}
          </PrismicLink>
        </li>
      )
  }
}

export default MainMenuItem
