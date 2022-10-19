import '../styles/globals.css'
import Link from 'next/link'
import Head from 'next/head'
// import Script from 'next/script'
import { PrismicProvider } from '@prismicio/react'
import { PrismicPreview } from '@prismicio/next'
import { repositoryName } from '../prismicio'
// import { getCookie } from 'cookies-next'

export default function App({ Component, pageProps }) {
  // const consent = getCookie(`localConsent`)
  return (
    <PrismicProvider
      internalLinkComponent={({ href, ...props }) => (
        <Link href={href}>
          <a {...props} />
        </Link>
      )}
    >
      <PrismicPreview repositoryName={repositoryName}>
        <Head>
          <link
            rel="preconnect"
            href="https://images.prismic.io"
            crossOrigin="true"
          />
          <link rel="dns-prefetch" href="https://images.prismic.io" />

          <link
            rel="preconnect"
            href="https://prismic-io.s3.amazonaws.com"
            crossOrigin="true"
          />
          <link rel="dns-prefetch" href="https://prismic-io.s3.amazonaws.com" />
          {/* <link
            rel="apple-touch-icon"
            sizes="180x180"
            href="/apple-touch-icon.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="32x32"
            href="/favicon-32x32.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="16x16"
            href="/favicon-16x16.png"
          />
          <link rel="manifest" href="/site.webmanifest" /> */}
        </Head>
        {/* <Script id="google-tag-manager" strategy="afterInteractive">
          {`window.dataLayer = window.dataLayer || [];function gtag(){dataLayer.push(arguments);} gtag('consent', 'default', {'ad_storage': 'denied', 'analytics_storage': 'denied' });(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start': new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);})(window,document,'script','dataLayer','GTM-NX9ZBZ3');`}
        </Script>
        {consent === true && (
          <Script
            id="consupd"
            strategy="afterInteractive"
            dangerouslySetInnerHTML={{
              __html: `
            gtag('consent', 'update', {
              'ad_storage': 'granted',
              'analytics_storage': 'granted'
            });
          `,
            }}
          />
        )} */}
        <Component {...pageProps} />
      </PrismicPreview>
    </PrismicProvider>
  )
}
