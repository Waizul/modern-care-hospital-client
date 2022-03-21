import React from 'react'
import Banner from '../components/Banner'
import Contact from '../components/Contact'
import Doctors from '../components/Doctors'
import Services from '../components/Services'

const Home = () => {
  return (
   <>
   <Banner/>
   <Services/>
   <Doctors/>
   <Contact/>
   </>
  )
}

export default Home