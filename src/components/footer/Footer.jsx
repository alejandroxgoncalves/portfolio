import React from 'react'

const Footer = () => {
  const year = new Date().getFullYear()
  return (
    <footer className="container max-w-full h-20 mt-36 bg-slate-900 p-5 text-center flex justify-center items-center 2xl:p-20">
      <p className="font-light text-sm mx-auto sm:text-base md:text-lg 2xl:text-2xl">
        © {year} Alejandro Xavier. Todos los derechos reservados.
      </p>
    </footer>
  )
}

export default Footer
