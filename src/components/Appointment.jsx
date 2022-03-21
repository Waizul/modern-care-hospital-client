import styled from 'styled-components';
import {Heading, Button} from '../globalStyles'
import {mobile,laptop, tablet} from '../responsive'
import bg from '../info-bg.jpg'

export const Container = styled.div`
width: 100vw;
height: calc(100vh - 60px);
padding-top: 5rem;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
`
export const Wrapper = styled.div`
padding: 0 2rem;
width: 90vw;
background-image: url(bg);
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
${tablet({width:'50vw'})}
`
export const Form = styled.form`
flex: 1;
width:100%;
margin: 0 5%;
padding: 2% 5%;
background-color: aliceblue;
border-radius: 5px;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
gap: 10px;
`

export const Select = styled.select`
padding: 10px 20px;
width:80%;
outline: none;
border: none;
border-radius: 5px;
/* ${laptop({width:'31.7vw'})} */
`
export const Option = styled.option`
font-size: 14px;
padding: 5px;
`

export const Input = styled.input`
width: 95%;
padding: 10px;
margin-right: 5px;
outline: none;
border: none;
border-radius: 5px;
${laptop({width:'79%'})}
${tablet({width:'79%'})}
`
export const Label = styled.label`

`
export const ImgContainer = styled.div`
/* flex: 1; */
display: none;
${laptop({display:'block'})}

`
export const Image = styled.img`
/* ${mobile({display:'none'})} */
width: 100%;
border-radius: 5px;
`
const Appointment = () => {
  return (
    <Container id='appointment'>
               <Heading>Book an Appointment</Heading>
       <Wrapper>
           <Form>
           <Select>
            <Option>Department</Option>
            <Option>Medicine</Option>
            <Option>Cardiology</Option>
            <Option>Gynocology</Option>
          </Select>
          <Select>
            <Option>Doctor</Option>
            <Option>Dr. Md. Hasan</Option>
          </Select>
            <Input placeholder="Your Name"></Input>
            <Input placeholder="Your Email"></Input>
            <Input placeholder="Your Phone Number" type='number'></Input>
            <Input type="time"></Input>
            <Input type="date"></Input>
          <Button primary>Book Appointment</Button>
           </Form>
       </Wrapper>
   </Container>
  )
}

export default Appointment