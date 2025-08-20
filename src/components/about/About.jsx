import React from 'react'

const About = () => {
  return (
    <section id='about' className='container mx-auto py-20 sm:py-28 md:py-36 lg:py-40 2xl:py-48 flex flex-col justify-center items-center' data-aos="fade-up" data-aos-easing='ease-in-out' data-aos-once='true' data-aos-duration='1000'>
      <h1 className='text-3xl font-bold sm:text-4xl 2xl:text-5xl'>Sobre mí</h1>
      <div className='md:flex md:justify-between md:items-start'>
        <p className='about-me my-5'>Mi nombre es Alejandro Xavier, tengo 24 años y 
          resido en Salto, Uruguay. Cuento con la carrera de Analista Programador 
          hasta el penúltimo semestre cursada. </p>
        <p className='about-me my-5'> Me metí en esto por curiosidad y
           me quedé por gusto. Aprendo rápido y me enfoco en hacer cosas que 
           funcionen bien. A continuación podes ver mis habilidades y proyectos.</p>
      </div>
    </section>
  )
}

export default About