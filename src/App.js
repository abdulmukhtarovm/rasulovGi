import React from 'react'
import About from './components/About'
import Header from './components/Header'
import Katalog from './components/Katalog'
import Navbar from './components/Navbar'


const App = () => {
  return (
    <>
      <Navbar />
      <Header/>
      <About/>
      <Katalog/>
    </>
  )
}

export default App