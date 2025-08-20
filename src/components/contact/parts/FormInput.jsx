// src/components/contact/parts/FormInput.jsx
import React, { useState } from 'react'

export default function FormInput({ onSuccess, onError }) {
  const [values, setValues] = useState({ name: '', email: '', message: '' })
  const [sending, setSending] = useState(false)

  // Poné acá tu URL de Google Apps Script (la de /exec)
  const ENDPOINT = 'https://script.google.com/macros/s/AKfycby-9SH0qxlbV5zJvNaSyxRG64_Jn43Lc5WRRKT9E6hw9dapq48bwDupULFNXFMGjpBFGg/exec'

  const onChange = (e) =>
    setValues((v) => ({ ...v, [e.target.name]: e.target.value }))

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (sending) return
    setSending(true)

    try {
      const formData = new FormData()
      formData.append('name', values.name)
      formData.append('email', values.email)
      formData.append('message', values.message)

      const res = await fetch(ENDPOINT, { method: 'POST', body: formData })
      if (!res.ok) throw new Error(`HTTP ${res.status}`)

      // éxito
      onSuccess?.()
      setValues({ name: '', email: '', message: '' })
      console.log('success')
    } catch (err) {
      console.error('error', err)
      onError?.(err)
      // opcional: alert('No se pudo enviar. Probá más tarde.')
    } finally {
      setSending(false)
    }
  }

  return (
    <form
      name="contact-form"
      onSubmit={handleSubmit}
      className="flex flex-col items-center w-3/4 text-center sm:w-1/2 lg:w-1/2"
    >
      <label
        htmlFor="name"
        className="font-semibold mx-auto text-xl lg:text-2xl 2xl:text-3xl"
        data-aos="fade-up"
        data-aos-easing="ease-in-out"
        data-aos-once="true"
        data-aos-duration="1000"
      >
        Nombre
      </label>
      <input
        id="name"
        name="name"
        type="text"
        required
        autoComplete="name"
        value={values.name}
        onChange={onChange}
        className="form-input"
        data-aos="fade-up"
        data-aos-easing="ease-in-out"
        data-aos-once="true"
        data-aos-duration="1000"
      />

      <label
        htmlFor="email"
        className="font-semibold mx-auto text-xl lg:text-2xl 2xl:text-3xl mt-4"
        data-aos="fade-up"
        data-aos-easing="ease-in-out"
        data-aos-once="true"
        data-aos-duration="1000"
      >
        Email
      </label>
      <input
        id="email"
        name="email"
        type="email"
        required
        autoComplete="email"
        value={values.email}
        onChange={onChange}
        className="form-input"
        data-aos="fade-up"
        data-aos-easing="ease-in-out"
        data-aos-once="true"
        data-aos-duration="1000"
      />

      <label
        htmlFor="message"
        className="font-semibold mx-auto text-xl lg:text-2xl 2xl:text-3xl mt-4"
        data-aos="fade-up"
        data-aos-easing="ease-in-out"
        data-aos-once="true"
        data-aos-duration="1000"
      >
        Mensaje
      </label>
      <textarea
        id="message"
        name="message"
        placeholder="Tu mensaje..."
        required
        value={values.message}
        onChange={onChange}
        className="form-input h-36"
        data-aos="fade-up"
        data-aos-easing="ease-in-out"
        data-aos-once="true"
        data-aos-duration="1000"
      />

      <button
        type="submit"
        id="send"
        disabled={sending}
        className="w-5/12 mx-auto text-center text-lg font-medium bg-blue-600 rounded-full px-5 py-3 mt-5 lg:w-40 hover:bg-blue-500 active:bg-blue-700 2xl:text-2xl 2xl:px-7 2xl:py-5 disabled:opacity-60 disabled:cursor-not-allowed"
      >
        {sending ? 'Enviando…' : 'Enviar'}
      </button>
    </form>
  )
}
