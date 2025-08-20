import React from 'react'

const MobileNavigations = ({active, setActive}) => {
  return (
    <ul className={`${active ? 'fixed w-full h-screen translate-y-0 top-0 bottom-0 right-0 left-0 -z-10 bg-primary flex flex-col justify-evenly items-center transition-all duration-500 sm:hidden' : 'fixed w-full h-screen -translate-y-[1200px] top-0 bottom-0 right-0 left-0 -z-10 bg-primary flex flex-col justify-evenly items-center transition-all duration-500 sm:hidden'}`}>
      <li><a href="#home" className='transition-all duration-300 border
      border-sky-600 text-sky-600 px-5 py-4 hover:bg-sky-600 hover:text-white' onClick={() => setActive(active => !active)}>Inicio  </a></li>


      <li><a href="#about" className='transition-all duration-300 border
      border-sky-600 text-sky-600 px-5 py-4 hover:bg-sky-600 hover:text-white' onClick={() => setActive(active => !active)}>Sobre mí</a></li>


      <li><a href="#skills" className='transition-all duration-300 border
      border-sky-600 text-sky-600 px-6 py-4 hover:bg-sky-600 hover:text-white' onClick={() => setActive(active => !active)}>Habilidades</a></li>

      <li><a href="#projects" className='transition-all duration-300 border
      border-sky-600 text-sky-600 px-5 py-4 hover:bg-sky-600 hover:text-white' onClick={() => setActive(active => !active)}>Proyectos  </a></li>


      <li><a href="#contact" className='transition-all duration-300 border
      border-sky-600 text-sky-600 px-4 py-4 hover:bg-sky-600 hover:text-white' onClick={() => setActive(active => !active)}>Contacto</a></li>
    </ul>
  )
}

export default MobileNavigations