// import Head from 'next/head'
import Layout from '../components/Layout'
import { createClient } from '../prismicio'
import { SliceZone } from '@prismicio/react'
import { components } from '../slices'

export default function Home({ page, navigation }) {
  // console.log('HomePage ===> ', navigation)
  return (
    <Layout className="bg-primary" navigation={navigation}>
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
  // const siteMetadata = await client.getSingle('sitemetadata')
  const page = await client.getSingle('homepage')

  const navigation = await client.getSingle('mainmenu')
  // const footer = await client.getSingle('footer')

  return {
    props: {
      navigation,
      page,
      // siteMetadata,
      // footer,
    },
  }
}
