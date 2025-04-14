import React from 'react'

import Nav from "./components/nav__bar/Nav.jsx"
import Footer from "./components/footer/Footer.jsx"
import Quotes from './components/quotes/Quotes.jsx'
import QuotesData from './components/quotes/QuotesData.jsx'


function App() {
  return (
    <>
    <Nav />
    <Quotes arr={QuotesData }/>
    <Footer />
    </>
  )
}

export default App