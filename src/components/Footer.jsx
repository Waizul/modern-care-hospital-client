import styled from 'styled-components';
import { Link } from '../globalStyles';
import {laptop,tablet} from '../responsive'

const Container = styled.div`
height: 50vh;
padding: 2% 10%;
margin-top: 100px;
color: white;
background-color: rgba(10,15,5);
display: flex;
flex-direction: column;
align-items: center;
justify-content: space-evenly;
${laptop({flexDirection:'row',marginTop:'50px'})}
${tablet({flexDirection:'row'})}
`
const Wrapper = styled.div`
flex: 1;
display: flex;
flex-wrap: wrap;
gap: 50px;
justify-content: space-around;
${laptop({justifyContent:'space-between'})}
${tablet({justifyContent:'space-between'})}
`

const Logo = styled.h3`
margin-left: 2rem;
`
const IconContainer = styled.div`
color: blue;
`

const Department = styled.div`

`
const Links = styled.div`
`
const P = styled.p`

`
const Footer = () => {
  return (
    <Container>
        <Wrapper>
<Logo>MDC</Logo>
<P>Modern Care Hospital<br/>
    - Road No: 2,<br/>
    - Dhanmondi,<br/>
    - Dhaka-1209.<br/>
    </P>
<IconContainer>
</IconContainer>
        </Wrapper>
        <Wrapper>

        <Wrapper>
<Department>
    <h3>Department</h3>
<P>Medicine</P>
<P>Cardiology</P>
<P>Gynaecology</P>
<P>ENT</P>
</Department>
        </Wrapper>
        <Wrapper>
<Links>
<h3>Links</h3>
<P><Link to='/doctors'>Doctors</Link></P>
<P><Link to='/services'>Services</Link></P>
<P><Link to='/pricing'>Pricing</Link></P>
<P><Link to='/pathology'>Pathology</Link></P>
</Links>
        </Wrapper>
        </Wrapper>
    </Container>
  )
}

export default Footer