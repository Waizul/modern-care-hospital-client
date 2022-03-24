import Banner from '../components/Banner'
import Contact from '../components/Contact'
import Doctors from '../components/Doctors'
import LabFacilities from '../components/LabFacilities'
import Services from '../components/Services'

const Home = () => {
  return (
    <>
   <Banner/>
   <Services/>
   <LabFacilities/>
   <Doctors/>
   <Contact/>
    </>
  )
}

export default Home