import Navbar from './Navbar'
import Footer from './Footer'
const Layout = ({ children, navigation, sitelogo, footertext }) => {
  const getLogo = (navdata, metadata) => {
    if (Object.keys(navdata.data.logo).length > 0) {
      return navdata.data.logo
    } else {
      return metadata
    }
  }
  const logo = getLogo(navigation, sitelogo)
  return (
    <div className="relative">
      <ul id="nav-access" className="relative mx-auto">
        <li>
          <a
            href="#main-content"
            className="absolute -top-20 z-50 inline-block w-full transform bg-primary-content bg-opacity-30 text-center text-2xl text-base-100 transition-all duration-500 ease-in-out focus:translate-y-20 sm:left-1/4 sm:w-1/2"
          >
            Skip to main content{' '}
            <span className="rounded-sm bg-secondary px-3 py-0 text-base text-gray-800">
              Return
              {/* <BsArrowReturnLeft className="w-3 h-3 inline text-gray-800 ml-1" /> */}
            </span>
          </a>
        </li>
      </ul>
      <div className="flex min-h-screen flex-col">
        <header>
          <Navbar
            {...navigation.data}
            logo={logo}
            backgroundimage={navigation.data.backgroundimage}
            // navigationlinks={navigationlinks}
            // sociallinks={sociallinks}
          />
        </header>
        <main id="main-content">{children}</main>
        <Footer copyright={footertext} />
        {/* <Consent /> */}
      </div>
    </div>
  )
}
export default Layout
