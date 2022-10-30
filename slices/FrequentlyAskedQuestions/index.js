import * as React from 'react'
import { PrismicRichText } from '@prismicio/react'
import { PrismicNextImage } from '@prismicio/next'
import PrismicNextLink from '../../components/PrismicNextLink'

/**
 * @typedef {import("@prismicio/client").Content.FrequentlyAskedQuestionsSlice} FrequentlyAskedQuestionsSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<FrequentlyAskedQuestionsSlice>} FrequentlyAskedQuestionsProps
 * @param { FrequentlyAskedQuestionsProps }
 */
const FrequentlyAskedQuestions = ({ slice }) => {
  const [previousIndex, setPreviousIndex] = React.useState(null)
  const [openIndex, setOpenIndex] = React.useState(null)
  const {
    items,
    primary: { title, description },
  } = slice
  React.useEffect(() => {
    let question
    let previousQuestion
    if (openIndex !== null) {
      question = document.querySelector(`#question${openIndex}`)
      if (previousIndex !== null) {
        previousQuestion = document.querySelector(`#question${previousIndex}`)
        previousQuestion.classList.remove('collapse-open')
      }
      question.classList.add('collapse-open')
    }
  }, [openIndex, previousIndex])
  const templates = {
    heading2: ({ children }) => {
      return (
        <h2 className="text-2xl font-bold text-secondary md:text-3xl lg:text-4xl">
          {children}
        </h2>
      )
    },
    heading3: ({ children }) => {
      return (
        <h3 className="text-xl font-semibold text-secondary md:text-2xl lg:text-3xl">
          {children}
        </h3>
      )
    },
    paragraph: ({ children }) => {
      return (
        <p className="prose md:prose-lg lg:prose-xl xl:prose-2xl">{children}</p>
      )
    },
    hyperlink: ({ node, children }) => {
      return (
        <PrismicNextLink field={node.data} className="text-primary">
          {children}
        </PrismicNextLink>
      )
    },
    image: ({ node, children }) => {
      return (
        <div
          className="not-prose tooltip tooltip-accent my-4"
          data-tip={node.alt}
        >
          <a href={node.url} target="_blank" rel="noreferrer">
            <PrismicNextImage field={node} className="rounded-lg" />
          </a>
        </div>
      )
    },
    embed: ({ node, children }) => {
      return (
        <div className="rounded-box mx-auto max-w-screen-sm overflow-hidden shadow-xl">
          <div
            className="aspect-w-16 aspect-h-9"
            dangerouslySetInnerHTML={{ __html: node.oembed.html }}
          />
        </div>
      )
    },
  }
  return (
    <section className="mx-auto my-4 grid max-w-screen-sm gap-y-4 px-4 md:my-6 md:gap-y-6 lg:my-8 lg:gap-y-8 xl:my-10">
      {title.length > 0 && (
        <PrismicRichText field={title} components={templates} />
      )}
      {description.length > 0 && (
        <PrismicRichText field={description} components={templates} />
      )}
      {items.length > 0 &&
        items.map((item, i) => (
          <div
            key={item.question}
            id={`question${i}`}
            tabIndex={0}
            className={`collapse-arrow rounded-box collapse border border-primary bg-base-100`}
            onFocus={() => {
              setPreviousIndex(openIndex)
              setOpenIndex(i)
            }}
          >
            <div className="collapse-title text-xl font-medium text-secondary">
              {item.question}
            </div>
            <div className="collapse-content">
              <PrismicRichText field={item.answer} components={templates} />
            </div>
          </div>
        ))}
    </section>
  )
}

export default FrequentlyAskedQuestions
