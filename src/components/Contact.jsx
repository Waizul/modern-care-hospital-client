import styled from 'styled-components';
import { css } from 'styled-components';
import {Button, Heading} from '../globalStyles'
import {tablet, laptop} from '../responsive'
import phone from '../icons/phone.png'
import address from '../icons/address.png'

const Container = styled.div`
  height: calc(100vh - 60px);
  width: 100vw;
  padding-top: 50px;
`;

const Wrapper = styled.div`
  /* padding: 60px; */
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  gap: 1rem;
  /* color: white; */
  ${laptop({flexDirection: 'row', padding: '3rem'})}
  ${tablet({flexDirection: 'row', padding: '1rem'})}
`;
const Left = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  `;
  const InfoContainer = styled.div`
  flex: 1;
  padding: 1rem 2.5rem;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  `
  const InfoWrapper = styled.div`
  display: flex;
  gap: 1rem;
  `
  const Icon = styled.img`
  width: 25px;
  height: 25px;
  cursor: pointer;
  `
  const Info = styled.p`
  
`
const Map = styled.div`
flex: 2;
padding: 2.5rem;
width: 100%;
height: 100%;
margin-top: 0;
padding-top: 0;
${tablet({height:'111%'})}
${laptop({height:'111%'})}
`
const Right = styled.div`
  flex: 1;
`;

const Form = styled.form`
  padding: 30px;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 20px;
  background-color: lightgray;
  /* border: 2px solid gray; */
  border-radius: 5px;
  ${laptop({width: '80%', padding: '2rem'})}
  ${tablet({width: '80%', padding: '1rem'})}
`;
const Title = styled.h3`
color: #11111a;
font-size: 25px;
`
const Label = styled.label`
  font-size: 20px;
`;
const inputCSS = css`
  padding: 5px;
  font-size: 18px;
  margin-right: 10px;
  border: none;
  border-bottom: 2px solid rgb(28,105,63);
  outline: none;
  background-color: transparent;

  ${laptop({ padding: '2rem'})}
  ${tablet({flexDirection: 'row', padding: '1rem'})}
`;
const Input = styled.input`
  ${inputCSS}
`;
const Text = styled.textarea`
  ${inputCSS}
`;
// const Button = styled.button`
//   ${inputCSS}
//   cursor: pointer;

//   &:hover {
//     background-color: crimson;
//     border-radius: 5px;
//   }
// `;
const Contact = () => {
  return (
    <Container>
        <Heading>Contact Us</Heading>
    <Wrapper>
      <Left>
       <Map>
           <iframe width="90%" height="100%" id="gmap_canvas" src="https://maps.google.com/maps?q=dhanmondi&t=&z=15&ie=UTF8&iwloc=&output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe>
       </Map>
       <InfoContainer>
           <InfoWrapper>

           <Icon src={phone} alt='phone'/>
           <Info>01710 000 000</Info>
           </InfoWrapper>
           <InfoWrapper>

           <Icon src={address} alt='address'/>
           <Info>Road No: 2, <br/>Dhanmondi, <br/> Dhaka-1209.</Info>
           </InfoWrapper>
       </InfoContainer>
      </Left>

      <Right>
        <Form>
          <Title>Your message</Title>
          <Input placeholder="Your name..." />
          <Input placeholder="Your email..." />
          <Input placeholder="Subject..." />
          <Text placeholder="Your message..." rows={4} />
          <Button primary>
            Send
          </Button>
        </Form>
      </Right>
    </Wrapper>
  </Container>
  )
}

export default Contact