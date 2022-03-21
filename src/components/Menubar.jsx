import styled from 'styled-components';
import { navLinks } from '../data';
import { Button, Link } from '../globalStyles';
import {mobile} from '../responsive'

const Container = styled.nav`
width:50vw;
position: fixed;
z-index: 21;
background-color: rgb(28,105,63);
height: 100vh;
right: ${props=>props.open ? 0 : '-50vw'};
transition: all 1s ease;
display: none;
-webkit-box-shadow: 0px 10px 13px -7px #000000, inset 1px 0px 0px 0px rgba(226,217,255,0.89); 
box-shadow: 0px 10px 13px -7px #000000, inset 0px 0px 3px 0px rgba(226,217,255,0.89);

${mobile({display:'block'})}
`
const Wrapper = styled.div`
height: 100%;
padding: 50px;
display: flex;
flex-direction: column;
justify-content: space-between;
`
const NavList = styled.ul`
color: white;
height: 100%;
font-size: 18px;
display: flex;
flex-direction: column;
align-items: center;
justify-content: space-evenly;
`
const NavItem = styled.li`
width: 80%;
cursor: pointer;

&:hover{
    font-weight: bold;
}
`
const Menubar = ({open, setOpen}) => {
  return (
    <Container open={open}>
        <Wrapper>

        <NavList>
          { navLinks.map(a=><NavItem onClick={()=>setOpen(!open)} key={a.id}><Link to={a.path}>{a.title}</Link></NavItem>)}
        </NavList>
        <Button>Register</Button>
        <Button primary>Log In</Button>
        </Wrapper>
        </Container>
  )
}

export default Menubar