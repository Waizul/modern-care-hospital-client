import { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import {Button, Link} from '../globalStyles'
import {mobile,tablet,laptop} from '../responsive'
import useAuth from '../hooks/useAuth'

const Container = styled.div`
width: 100vw;
height: 100vh;
background: linear-gradient(
    rgba(255, 255, 255, 0.5),
    rgba(255, 255, 255, 0.5)
  ),
  url("");
background-size: cover;
display: flex;
align-items: center;
justify-content: center;
`;

const Wrapper = styled.div`
min-width: 50vw;
padding: 20px;
background-color: rgb(1,1,1,0.1);
border-radius: 5px;
${mobile({ width: "75%" })}
`;

const Title = styled.h1`
font-size: 24px;
font-weight: 300;
`;

const Form = styled.form`
display: flex;
flex-direction: column;
`;

const Input = styled.input`
flex: 1;
min-width: 40%;
margin: 10px 0;
padding: 10px;
border-radius: 5px;
`;
const Text = styled.p`
margin-bottom: 5px;

&.new{
  color: blue;
}
`

const Register = () => {
    const [displayName, setDisplayName] = useState('')
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [password2, setPassword2] = useState("");

const {signInUsingEmail,authError,loading,signInUsingGoogle} = useAuth()

    const navigate = useNavigate()
    const location = useLocation()
  const from = location.state?.from?.pathname || '/'

const handleInput = (e) => {
    e.preventDefault()
    signInUsingEmail(email, password,navigate,from)
}

const handleGoogleSignIn = () =>{
  signInUsingGoogle
  (navigate,from)
}

  return (
    <Container>
      <Wrapper>
        <Title>REGISTER</Title>
        <Form>
          <Input
            placeholder="Your name"
            onBlur={(e) => setEmail(e.target.value)}
          />
          <Input
            placeholder="Your email"
            onBlur={(e) => setEmail(e.target.value)}
          />
          <Input
            placeholder="password"
            type='password'
            onBlur={(e) => setPassword(e.target.value)}
          />
          <Input
            placeholder="Confirm password"
            type='password'
            onBlur={(e) => setPassword2(e.target.value)}
          />
          <Button onClick={handleInput}>Register</Button>
          <Text>Already registered ?</Text>
          <Link to='/login'><Text className='new'>Login here</Text  ></Link>
        </Form>
        <Text>Or</Text>
        <Button primary onClick={handleGoogleSignIn}>Sign in with google</Button>
      </Wrapper>
    </Container>
  )
}

export default Register