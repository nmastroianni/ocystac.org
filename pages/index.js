import Head from 'next/head'
import Layout from '../components/Layout'
import * as prismicH from '@prismicio/helpers'
import { createClient } from '../prismicio'
import { SliceZone } from '@prismicio/react'
import { components } from '../slices'

export default function Home({ page, navigation, siteMetadata }) {
  return (
    <Layout
      className="bg-primary"
      navigation={navigation}
      {...siteMetadata.data}
    >
      <Head>
        <title>{`${prismicH.asText(page.data.title)} · ${
          siteMetadata.data.sitetitle
        }`}</title>
        <link rel="canonical" href="https://www.ocystac.org" />
        <meta
          name="description"
          content={
            page.data.homepagemetadescription ||
            siteMetadata.data.sitedescription
          }
        />
        <meta
          property="og:description"
          content={
            page.data.homepagemetadescription ||
            siteMetadata.data.sitedescription
          }
        />
        <meta property="og:url" content="https://www.ocystac.org" />
        <meta property="og:type" content="website" />

        <meta
          property="og:image"
          content={
            page.data.homepagemetaimage.url ||
            siteMetadata.data.sitemetaimage.url
          }
        />

        <meta property="twitter:card" content="summary" />

        <meta
          property="twitter:image"
          content={
            page.data.homepagetwitterimage.url ||
            page.data.homepagemetaimage ||
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
export async function getStaticProps({ previewData }) {
  const client = createClient({ previewData })
  const siteMetadata = await client.getSingle('sitemetadata')
  const page = await client.getSingle('homepage')

  const navigation = await client.getSingle('mainmenu')
  // const footer = await client.getSingle('footer')

  return {
    props: {
      navigation,
      page,
      siteMetadata,
    },
  }
}
