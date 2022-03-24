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
&.new{
  color: blue;
}
`

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

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
        <Title>SIGN IN</Title>
        <Form>
          <Input
            placeholder="email"
            onBlur={(e) => setEmail(e.target.value)}
          />
          <Input
            placeholder="password"
            type='password'
            onBlur={(e) => setPassword(e.target.value)}
          />
          <Button onClick={handleInput}>Login</Button>
          <Text>Not registered ?</Text>
          <Link to='/register'><Text className='new'>Create a new account</Text  ></Link>
        </Form>
        <Button onClick={handleGoogleSignIn}>Signin with google</Button>
      </Wrapper>
    </Container>
  )
}

export default Login