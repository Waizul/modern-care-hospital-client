import { BrowserRouter } from 'react-router-dom'
import Banner from '../components/Banner'
import Contact from '../components/Contact'
import Doctors from '../components/Doctors'
import PathologyTests from '../components/PathologyTests'
import Services from '../components/Services'

const Home = () => {
  return (
    <>
   <Banner/>
   <Services/>
   <PathologyTests/>
   <Doctors/>
   <Contact/>
    </>
  )
}

export default Home