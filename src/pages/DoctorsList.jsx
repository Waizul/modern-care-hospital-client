import styled from 'styled-components';
import Doctors from '../components/Doctors'


const Container = styled.div`
position: relative;
/* top: 70px; */
`
const DoctorsList = () => {
  return (
    <Container><Doctors/></Container>
  )
}

export default DoctorsList