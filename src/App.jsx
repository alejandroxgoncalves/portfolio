import { Navbar, Hero, About, Skills,Projects, Contact, Footer } from './components'



function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects /> 
        <Contact />
      </main>
      <Footer />
    </>
  )
}

export default App