import styled from "styled-components";
import { navLinks } from "../data";
import useAuth from "../hooks/useAuth";
import { A, Button, Link, NavLink } from "../globalStyles";
import { mobile } from "../responsive";

const Container = styled.nav`
  width: 100%;
  height: 70px;
  background-color: rgb(28, 105, 63);
  position: fixed;
  display: flex;
  align-items: center;

  z-index: 22;
  scroll-snap-align: start;
`;
const Wrapper = styled.div`
  flex: 11;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0px 50px;
  color: white;
  ${mobile({ padding: "0 30px" })}
`;
const Left = styled.div`
  flex: 1;
`;

const LogContainer = styled.div`
  width: max-content;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 5px;
`;
const Logo = styled.span`
width: max-content;
  font-weight: 400;
  font-size: 16px;
  padding: 0px 4px;
  padding-bottom: 3px;
  border: 1px solid white;
  border-radius: 60%;
  display: flex;
  flex-direction: column;
  align-items: center;
justify-content: center;
`;

const Name = styled.h1`
  margin: 0;
  width: max-content;
  font-size: 16px;
  cursor: pointer;
  ${mobile({ display: "none" })}
`;

const Center = styled.div`
  flex: 2;
  ${mobile({ display: "none" })}
`;
const NavList = styled.ul`
  display: flex;
  gap: 30px;
  list-style: none;
  font-weight: 500;
`;
const NavItem = styled.li`
  width: max-content;
  cursor: pointer;
`;
const Right = styled.div`
  flex: 1;
  justify-self: end;
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-left: 1rem;
  ${mobile({ display: "none" })}
`;
const AvatarContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;
const Avatar = styled.img`
  width: 30px;
  height: 30px;
  border-radius: 50%;
  object-fit: cover;
`;

// const IconContainer = styled.div``;
// const Icon = styled.span`
//   color: white;
//   font-size: 12px;
//   margin-right: 10px;
//   cursor: pointer;
// `;
const HamburgerMenu = styled.div`
  display: none;
  flex-direction: column;
  gap: 5px;
  cursor: pointer;
  padding: 10px;
  ${mobile({ display: "flex" })}

  &>span {
    width: 24px;
    height: 3px;
    background-color: white;
    transform-origin: left;
    transition: all 1s ease;

    &:first-child {
      transform: ${(props) => props.open && "rotate(45deg)"};
    }
    &:nth-child(2) {
      opacity: ${(props) => (props.open ? 0 : 1)};
    }
    &:last-child {
      transform: ${(props) => props.open && "rotate(-45deg)"};
    }
  } ;
`;
const Navbar = ({ open, setOpen }) => {
  const { user, logOut } = useAuth();

  return (
    <Container>
      <Wrapper>
        <Left>
          <LogContainer>
            <Link to="/">
              <Logo>MCH</Logo>
              <Name>Modern Care Hospital</Name>
            </Link>
          </LogContainer>
        </Left>

        <Center>
          <NavList>
            {navLinks.map((a) => (
              <NavItem key={a.id}>
                <NavLink to={a.path}>{a.title}</NavLink>
              </NavItem>
            ))}
          </NavList>
        </Center>
        <Right>
          {user.email ? (
            <>
              <Link to="/dashboard">
                <AvatarContainer>
                  {user.photoURL && <Avatar src={user.photoURL} alt="" />}
                  <span>{user.displayName}</span>
                </AvatarContainer>
              </Link>
              <Button red onClick={logOut}>Log out</Button>
            </>
          ) : (
            <>
              <Link to="/register">
                <Button red>Register</Button>
              </Link>
              <Link to="/login">
                <Button>Log In</Button>
              </Link>
            </>
          )}
        </Right>
      </Wrapper>
      <HamburgerMenu open={open} onClick={() => setOpen(!open)}>
        <span />
        <span />
        <span />
      </HamburgerMenu>
    </Container>
  );
};

export default Navbar;
