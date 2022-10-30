import Link from 'next/link'
const Footer = () => {
  return (
    <footer className="mt-auto flex flex-col items-center justify-center space-y-4 bg-neutral p-4 text-base-100 md:p-6 lg:p-8 xl:p-10">
      <div className="grid grid-flow-col gap-4">
        {/* <Link href={'/privacy'} className="link-hover link">
          Privacy
        </Link> */}
      </div>
      <div className="text-center md:text-left">
        <p>Copyright © 2022 - All right reserved by OCYSTAC</p>
      </div>
    </footer>
  )
}
export default Footer
