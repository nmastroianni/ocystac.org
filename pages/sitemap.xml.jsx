import * as React from 'react'
import { renderToStaticMarkup } from 'react-dom/server'
import { createClient } from '../prismicio'

const SitemapIndex = () => null

const Sitemap = ({ pages }) => {
  const origin = 'https://www.ocystac.org'
  return (
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
      {pages?.map((page, index) => {
        const lastModified = new Date(page.last_publication_date).toISOString()

        // special rule for the Homepage
        if (page.type === 'homepage') {
          return (
            <url key={index}>
              <loc>{origin}</loc>
              <lastmod>{lastModified}</lastmod>
            </url>
          )
        }

        if (page.url && !(page.data.seoIndex === false)) {
          const url = origin + page.url

          return (
            <url key={index}>
              <loc>{url}</loc>
              <lastmod>{lastModified}</lastmod>
            </url>
          )
        }
      })}
    </urlset>
  )
}

export async function getServerSideProps({ res }) {
  const client = createClient()
  const pages = await client.dangerouslyGetAll()
  res.setHeader('Content-Type', 'text/xml')
  res.write(renderToStaticMarkup(<Sitemap pages={pages} />))
  res.end()
  return {
    props: {},
  }
}
export default SitemapIndex
