import styled from 'styled-components';
import PathologyTests from '../components/PathologyTests'

const Container = styled.div`
position: relative;
`

const Pathology = () => {
  return (
    <Container><PathologyTests/></Container>
  )
}

export default Pathology