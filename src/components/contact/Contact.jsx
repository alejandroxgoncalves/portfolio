
import React, { useState } from 'react'
import FormInput from './parts/FormInput'

const Contact = () => {
  const [sent, setSent] = useState(false)

  return (
    <section
      id="contact"
      aria-labelledby="contact-title"
      className="container mx-auto py-20 sm:py-28 md:py-36 lg:py-40 2xl:py-48 flex flex-col items-center"
    >
      <h2
        id="contact-title"
        className="text-3xl font-bold sm:text-4xl 2xl:text-5xl mb-5"
        data-aos="fade-up"
        data-aos-easing="ease-in-out"
        data-aos-once="true"
        data-aos-duration="1000"
      >
        Contacto
      </h2>

      {sent && (
        <div
          role="status"
          aria-live="polite"
          className="w-full sm:w-2/3 lg:w-1/2 mb-5 text-center bg-emerald-600/20 border border-emerald-500 text-emerald-300 rounded-lg px-4 py-3"
        >
          ¡Tu mensaje se envió!
        </div>
      )}

      <FormInput onSuccess={() => setSent(true)} />

      <p className="mt-4 text-sm text-neutral-400 text-center">
        Otras vías de contacto:{' '}
        <a
          href="mailto:alejandroxaviergoncalves16@gmail.com"
          className="underline decoration-sky-600 hover:text-white"
        >
          alejandroxavier1121@gmail.com
        </a>{' '}
        | WhatsApp{' '}
        <a
          href="https://wa.me/59898470160"
          target="_blank"
          rel="noopener noreferrer"
          className="underline decoration-emerald-600 hover:text-white"
        >
          +598 98 470 160
        </a>.
      </p>
    </section>
  )
}

export default Contact
