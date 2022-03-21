import React from 'react'
import Appointment from '../components/Appointment'
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
   <Appointment/>
   <Contact/>
   </>
  )
}

export default Home