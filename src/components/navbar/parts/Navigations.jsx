import React from 'react'

const Navigations = () => {
  return (
    <ul className='hidden justify-around items-center sm:flex'>
        <li><a href="#home" className='nav-menu'>Inicio</a></li>
        <li><a href="#about" className='nav-menu'>Sobre Mí</a></li>
        <li><a href="#skills" className='nav-menu'>Habilidades</a></li>
        <li><a href="#projects" className='nav-menu'>Proyectos</a></li>

        <li><a href="#contact" className='nav-menu'>Contacto</a></li>
    </ul>
  )
}

export default Navigations