import React from 'react'
import axios from 'axios'
import { useForm } from 'react-hook-form'

/**
 * @typedef {import("@prismicio/client").Content.ContactFormSlice} ContactFormSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<ContactFormSlice>} ContactFormProps
 * @param { ContactFormProps }
 */
const ContactForm = ({ slice }) => {
  const [isDisabled, setIsDisabled] = React.useState(false)
  const [success, setSuccess] = React.useState(null)
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm()

  const sendContactRequest = async () => {
    console.log('sendContactRequest triggered')
  }

  const {
    primary: {
      namequestion,
      nameplaceholder,
      emailquestion,
      emailplaceholder,
      selectquestion,
      commentquestion,
      commentplaceholder,
    },
    id,
    items,
    version,
  } = slice
  return (
    <section className="mx-auto my-4 grid max-w-screen-sm px-4 md:my-6 md:gap-x-4 lg:my-8 xl:my-10">
      <form
        className="flex flex-col gap-y-4"
        onSubmit={handleSubmit(sendContactRequest)}
      >
        <label htmlFor={`name_${id || version}`}>
          <span className="sr-only">{namequestion}</span>
          <input
            name={`name_${id || version}`}
            type="text"
            placeholder={nameplaceholder}
            {...register(`name_${id || version}`, {
              required: 'Your name is required.',
            })}
            className={`what max-w-s input-bordered input-secondary input w-full self-end`}
          />
        </label>
        {errors[`name_${id || version}`] && (
          <p className="text-error">
            {' '}
            &uarr; {errors[`name_${id || version}`].message}
          </p>
        )}
        <label htmlFor={`email_${id || version}`}>
          <span className="sr-only">{emailquestion}</span>
          <input
            name={`email_${id || version}`}
            type="email"
            placeholder={emailplaceholder}
            {...register(`email_${id || version}`, {
              required: 'Your email address is required.',
            })}
            className={`what max-w-s input-bordered input-secondary input w-full self-end`}
          />
        </label>
        {errors[`email_${id || version}`] && (
          <p className="text-error">
            {' '}
            &uarr; {errors[`email_${id || version}`].message}
          </p>
        )}
        <label htmlFor="group" className="text-lg font-semibold text-secondary">
          <span className="sr-only">{selectquestion}</span>
        </label>
        <select
          name={`group_${id || version}`}
          defaultValue=""
          {...register(`group_${id || version}`, {
            required: 'A group is required.',
            pattern: '/^((?!Select).)*$/',
          })}
          className="max-w-s input-bordered input-secondary select w-full self-end"
        >
          <option disabled value="">
            Select the group you wish to contact
          </option>
          {items.map((group, i) => (
            <option key={group.contactreason + id} value={group.contactreason}>
              {group.contactreason}
            </option>
          ))}
        </select>
        {errors[`group_${id || version}`] && (
          <p className="text-error">
            {' '}
            &uarr; {errors[`group_${id || version}`].message}
          </p>
        )}
        <label
          htmlFor={`comment_${id || version}`}
          className="text-lg font-semibold text-secondary"
        >
          <span className="sr-only">{commentquestion}</span>
        </label>
        <textarea
          name={`comment_${id || version}`}
          placeholder={commentplaceholder}
          className="textarea-secondary textarea min-h-[200px]"
          {...register(`comment_${id || version}`, {
            required: 'Your question/comment is required.',
          })}
        />
        {errors[`comment_${id || version}`] && (
          <p className="text-error">
            {' '}
            &uarr; {errors[`comment_${id || version}`].message}
          </p>
        )}
        <div>
          <input
            type={'submit'}
            className={`btn w-full ${isDisabled ? `btn-disabled` : ``}`}
            value="Send Message"
          />
          <p className="prose-sm prose prose-a:text-neutral-content prose-a:no-underline hover:prose-a:underline">
            This site is protected by reCAPTCHA and the{' '}
            <a href="https://policies.google.com/privacy">
              Google Privacy Policy
            </a>{' '}
            and <a href="https://policies.google.com/terms">Terms of Service</a>{' '}
            apply.
          </p>
        </div>
      </form>
      {success === true && (
        <div className="grid grid-rows-1 place-items-center">
          <p className="prose-xl">
            Thank you for reaching out. We will get back to you within 48 hours.
          </p>
        </div>
      )}
      {success === false && (
        <div className="grid grid-rows-1 place-items-center">
          <p className="prose-xl">
            😔 Something went wrong behind the scenes. Please try again later.
          </p>
        </div>
      )}
    </section>
  )
}

export default ContactForm
