import React from 'react'

import Hero from './hero/Hero'
import Catalog from './catalog/Catalog'
import Promo from './promo/Promo'
import Comand from './comand/Comand'

import './main.css'

function Main() {
  return (
    <main className='main'>
      <Hero />
      <Catalog />
      <Promo />
      <Comand />
    </main>
  )
}

export default Main