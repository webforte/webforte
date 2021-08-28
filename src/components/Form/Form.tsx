/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable jsx-a11y/heading-has-content */
/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable react/jsx-props-no-spreading */
import React, { useState } from 'react'
import { createClient } from '@formium/client'
import { FormiumForm, defaultComponents } from '@formium/react'
import ReactMarkdown from 'react-markdown'
import { BigLink } from '../UI'

export const formium = createClient(
  process.env.GATSBY_PROJECT_FORMIUM_PROJECTID || ''
)

const Header = (props: any) => null // <h3 className="" {...props} />

export const PageWrapper = (props: any) => (
  <div className="grid grid-cols-1 gap-y-6" {...props} />
)

export const TextInput = (props: any) => (
  <input
    className="block w-full shadow-sm py-2 px-3 placeholder-gray-500 focus:ring-brand focus:border-brown ring-2 ring-gray-300 rounded-sm"
    {...props}
  />
)

export const Label = (props: any) => (
  <label className="block mb-0 text-gray-600 text-base" {...props} />
)

export const FormControl = React.memo(function FormControl({
  children,
  description,
  error,
  label,
  labelFor,
}: any) {
  return (
    <div>
      {label && <Label htmlFor={labelFor}>{label}</Label>}
      {description && (
        <div className="text-xs text-gray-500">{description}</div>
      )}
      <div className="mt-1.5">{children}</div>
      {error && <div className="mt-1 text-xs text-red-500">{error}</div>}
    </div>
  )
})

export const Textarea = (props: any) => (
  <textarea
    rows={4}
    className="block w-full shadow-sm py-2 px-3 placeholder-gray-500 focus:ring-brown focus:border-brown ring-2 ring-gray-300 rounded-sm"
    {...props}
  />
)

export const Checkbox = ({
  label,
  value,
  name,
  id,
  checked,
  onChange,
  ...props
}: any) => {
  return (
    <label className="flex gap-3">
      <input
        className="mt-2"
        type="checkbox"
        id={id}
        name={name}
        checked={checked}
        value={value}
        onChange={onChange}
        {...props}
      />
      <ReactMarkdown linkTarget="_blank">{label}</ReactMarkdown>
    </label>
  )
}

export const Radio = ({ label, ...props }: any) => {
  return (
    <label className="flex gap-3">
      <input type="radio" className="mt-2" {...props} />
      {label}
    </label>
  )
}

export const NextButton = (props: any) => (
  <div className="text-center">
    <button
      type="button"
      className="inline-block tracking-widest uppercase border-2 px-4 py-2 rounded border-brown-light hover:border-brown transition-colors"
      {...props}
    >
      Weiter
    </button>
  </div>
)

export const PreviousButton = (props: any) => (
  <div className="text-center">
    <button
      type="button"
      className="inline-block tracking-widest uppercase px-4 py-2 text-gray-600 hover:text-gray-700 transition-colors"
      {...props}
    >
      Zurück
    </button>
  </div>
)

export const SubmitButton = (props: any) => (
  <div className="">
    <BigLink as="button" {...props}>
      Submit
    </BigLink>
  </div>
)

export const components = {
  ...defaultComponents,
  Header,
  TextInput,
  FormControl,
  Textarea,
  PageWrapper,
  Checkbox,
  Radio,
  PreviousButton,
  NextButton,
  SubmitButton,
}

type FormProps = {
  data: any
}

export const Form = ({ data }: FormProps): JSX.Element | null => {
  const { slug } = data
  const [submitted, setSubmitted] = useState(false)
  const [error, setError] = useState<boolean>(false)

  return (
    <>
      {submitted && !error && (
        <>
          <h3 className="text-3xl font-bold mb-5">Vielen Dank</h3>
          <p className="text-lg leading-6 text-gray-600">
            Ihre Nachricht ist angekommen.
          </p>
        </>
      )}

      {submitted && error && (
        <>
          <h3 className="text-3xl font-bold mb-5">
            Ups, hier ist was schief gelaufen.
          </h3>
          <p className="text-lg leading-6 text-gray-500">
            Bitte versuchen Sie es später noch einmal. Wir arbeiten bereits an
            einer Lösung.
          </p>
        </>
      )}

      {!submitted && (
        <FormiumForm
          data={data}
          components={components}
          onSubmit={async (values) => {
            try {
              await formium.submitForm(slug, values)
              setSubmitted(true)
            } catch (reason) {
              setError(true)
            }
          }}
        />
      )}
    </>
  )
}
