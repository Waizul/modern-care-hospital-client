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
justify-content: space-evenly;
${laptop({justifyContent:'space-between'})}
${tablet({justifyContent:'space-between'})}
`
const LogoContainer = styled.div`
width: 100px;
display: flex;
flex-direction: column;
justify-content: center;
gap: 5px;
`
const Logo = styled.h3`
width: max-content;
font-weight: 400;
  font-size: 16px;
  padding: 0px 4px;
  padding-bottom: 3px;
  border: 1px solid white;
  border-radius: 60%;
`
const Name = styled.h4`
width: max-content;
font-size: 22px;
`
const Address = styled.p`
font-size: 14px;
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
          <LogoContainer>
<Logo>MCH</Logo>
<Name>Modern Care Hospital</Name>
<Address>
    Road No: 2,<br/>
    Dhanmondi,<br/>
    Dhaka-1209.<br/>
    </Address>
          </LogoContainer>

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