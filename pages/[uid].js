import { SliceZone, PrismicRichText } from '@prismicio/react'
import * as prismicH from '@prismicio/helpers'
import Head from 'next/head'
import { createClient } from '../prismicio'
import { components } from '../slices'
import Layout from '../components/Layout'
import EventCard from '../components/EventCard'

const Page = ({ page, navigation, siteMetadata, events, updated }) => {
  const templates = {
    heading1: ({ node, children }) => {
      return (
        <h1
          className={`my-6 text-center text-2xl font-bold text-secondary lg:self-start lg:text-3xl xl:text-4xl`}
        >
          {children}
        </h1>
      )
    },
  }

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
        {events !== 'loading' && (
          <section>
            <ol>
              {events.length > 0 &&
                events.map(event => {
                  return (
                    <li key={event.id} className="mx-2">
                      <EventCard {...event} />
                    </li>
                  )
                })}
            </ol>
          </section>
        )}
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

  /**
   * Check if page is Calendar page
   * Grab Calendar Data
   */
  const updated = {
    time: new Date().toLocaleTimeString(),
    date: new Date().toLocaleDateString('en-US', {
      weekday: 'short',
      month: '2-digit',
      day: 'numeric',
      year: 'numeric',
    }),
  }
  let events = 'loading'
  if (params.uid === 'calendar') {
    events = await fetch(
      `https://content.googleapis.com/calendar/v3/calendars/${process.env.CALENDAR_ID}/events?key=${process.env.CALENDAR_API_KEY}&singleEvents=true&orderBy=startTime`
    )
      .then(response => response.json())
      .then(res => {
        const currentEvents = res.items.filter(
          item => new Date(item.end.dateTime) > new Date().setHours(0, 0, 0, 0)
        )
        return currentEvents
      })
  }

  return {
    props: {
      navigation,
      page,
      siteMetadata,
      events,
      updated,
    },
    revalidate: 60 * 30,
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
