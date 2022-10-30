import { SliceZone, PrismicRichText } from '@prismicio/react'
import * as prismicH from '@prismicio/helpers'
import Head from 'next/head'
import { createClient } from '../prismicio'
import { components } from '../slices'
import Layout from '../components/Layout'
import Icon from '../components/Icon'

const Page = ({ page, navigation, siteMetadata }) => {
  return (
    <Layout className="bg-primary" navigation={navigation}>
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
        {page.data.slices.length > 0 && (
          <SliceZone slices={page.data.slices} components={components} />
        )}
      </div>
    </Layout>
  )
}

export default Page
export async function getStaticProps({ params, previewData }) {
  const client = createClient({ previewData })
  const siteMetadata = await client.getSingle('sitemetadata')
  const page = await client.getByUID('page', params.uid)

  const navigation = await client.getSingle('mainmenu')
  // const footer = await client.getSingle('footer')

  return {
    props: {
      navigation,
      page,
      siteMetadata,
      // footer,
    },
  }
}

export async function getStaticPaths() {
  const client = createClient()
  const pages = await client.getAllByType('page')
  return {
    paths: pages.map(page => prismicH.asLink(page)),
    fallback: false,
  }
}
