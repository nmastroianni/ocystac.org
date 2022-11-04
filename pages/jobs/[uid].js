import * as React from 'react'
import { SliceZone, PrismicRichText } from '@prismicio/react'
import * as prismicH from '@prismicio/helpers'
import Head from 'next/head'
import { createClient } from '../../prismicio'
import { components } from '../../slices'
import Layout from '../../components/Layout'

const Job = ({ page, navigation, siteMetadata, events, updated }) => {
  let sliceTypes = []
  page.data.slices.forEach(slice => sliceTypes.push(slice.slice_type))
  const formOnPage = sliceTypes.indexOf('contact_form') > 0
  React.useEffect(() => {
    if (formOnPage) {
      const recaptchaScript = document.createElement('script')
      recaptchaScript.src = `https://www.google.com/recaptcha/api.js?render=${process.env.RECAPTCHA_SITE_KEY}`
      recaptchaScript.async = true
      document.head.appendChild(recaptchaScript)
      return () => {
        // Get all script tags: returns HTMLcollection
        const scripts = document.getElementsByTagName('script')
        // Loop through the HTMLcollection (array-like but not array)
        for (var i = 0; i < scripts.length; i++) {
          // find script whose src value includes "recaptcha/releases"
          // this script is added when main recaptcha script is loaded

          if (
            scripts.item(i).attributes.getNamedItem('src') &&
            scripts
              .item(i)
              .attributes.getNamedItem('src')
              .value.includes('recaptcha/releases')
          ) {
            document.head.removeChild(scripts.item(i)) // remove script from head
          }
        }
        document.head.removeChild(recaptchaScript) // remove main recaptcha script from head
        // remove the recaptcha badge from the bottom right corner
        let badge = document.querySelector('.grecaptcha-badge')
        if (badge) {
          badge.parentElement.remove()
        }
      }
    }
  }, [formOnPage])

  const templates = {
    heading1: ({ node, children }) => {
      return (
        <h1
          className={`my-6 text-center text-2xl font-bold text-secondary md:text-4xl lg:self-start lg:text-5xl xl:text-6xl`}
        >
          {children}
        </h1>
      )
    },
  }

  return (
    <Layout navigation={navigation} {...siteMetadata.data}>
      <Head>
        <title>{`${prismicH.asText(page.data.title)} · ${
          siteMetadata.data.sitetitle
        }`}</title>
        <link rel="canonical" href="https://www.ocystac.org" />
        <meta
          name="description"
          content={
            page.data.metadescription || siteMetadata.data.sitedescription
          }
        />
        <meta
          property="og:description"
          content={
            page.data.metadescription || siteMetadata.data.sitedescription
          }
        />
        <meta property="og:url" content={page.data.canonicalurl} />
        <meta property="og:type" content="website" />

        <meta
          property="og:image"
          content={
            page.data.metaimage.url || siteMetadata.data.sitemetaimage.url
          }
        />

        <meta property="twitter:card" content="summary" />

        <meta
          property="twitter:image"
          content={
            page.data.twitterimage.url ||
            page.data.metaimage ||
            siteMetadata.data.sitetwitterimage.url
          }
        />
      </Head>
      <div className="grid grid-cols-1 gap-y-4 md:gap-y-0">
        <div className="">
          <PrismicRichText field={page.data.title} components={templates} />
          {page.url === '/calendar' && (
            <p className="text-center text-sm">
              {`Page Last Updated: ${updated.date} ${updated.time}`}
            </p>
          )}
        </div>

        {page.data.slices.length > 0 && (
          <SliceZone slices={page.data.slices} components={components} />
        )}
      </div>
    </Layout>
  )
}

export default Job
export async function getStaticProps({ params, previewData }) {
  const client = createClient({ previewData })
  const siteMetadata = await client.getSingle('sitemetadata')
  const page = await client.getByUID('job', params.uid)

  const navigation = await client.getSingle('mainmenu')

  return {
    props: {
      navigation,
      page,
      siteMetadata,
    },
  }
}

export async function getStaticPaths() {
  const client = createClient()
  const pages = await client.getAllByType('job')
  return {
    paths: pages.map(page => prismicH.asLink(page)),
    fallback: false,
  }
}
