import styled from "styled-components";
import { navLinks } from "../data";
import { Button, Link, NavLink } from "../globalStyles";
import useAuth from "../hooks/useAuth";
import { mobile } from "../responsive";

const Container = styled.nav`
  width: 50vw;
  position: fixed;
  z-index: 21;
  background-color: rgb(28, 105, 63);
  height: 100vh;
  right: ${(props) => (props.open ? 0 : "-50vw")};
  transition: all 1s ease;
  display: none;
  -webkit-box-shadow: 0px 10px 13px -7px #000000,
    inset 1px 0px 0px 0px rgba(226, 217, 255, 0.89);
  box-shadow: 0px 10px 13px -7px #000000,
    inset 0px 0px 3px 0px rgba(226, 217, 255, 0.89);

  ${mobile({ display: "block" })}
`;
const Wrapper = styled.div`
  height: 100%;
  padding: 50px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;
const NavList = styled.ul`
  color: white;
  height: 100%;
  font-size: 18px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
`;
const NavItem = styled.li`
  width: 80%;
  cursor: pointer;

  &:hover {
    /* color: red; */
    font-weight: 500;
  }
`;
const AvatarContainer = styled.div`
  display: flex;
  gap: 5px;
  color: white;
  margin-bottom: 10px;
`;
const Avatar = styled.img`
  width: 30px;
  height: 30px;
  border-radius: 50%;
  object-fit: cover;
`;
const LoginContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const Menubar = ({ open, setOpen }) => {
  const { user, logOut } = useAuth();

  const handleLogout = () => {
    logOut();
    setOpen(!open);
  };

  return (
    <Container open={open}>
      <Wrapper>
        <NavList>
          {navLinks.map((a) => (
            <NavItem onClick={() => setOpen(!open)} key={a.id}>
              <NavLink to={a.path}>{a.title}</NavLink>
            </NavItem>
          ))}
        </NavList>

        {user.email ? (
          <>
            <Link to="/dashboard">
              <AvatarContainer>
                {user.photoURL && <Avatar src={user.photoURL} alt="" />}
                <span>{user.displayName}</span>
              </AvatarContainer>
            </Link>
            <Button onClick={handleLogout}>Log out</Button>
          </>
        ) : (
          <>
            <LoginContainer>
              <Link to="/register">
                <Button onClick={() => setOpen(!open)}>Register</Button>
              </Link>
              <Link to="/login">
                <Button primary onClick={() => setOpen(!open)}>
                  Log In
                </Button>
              </Link>
            </LoginContainer>
          </>
        )}
      </Wrapper>
    </Container>
  );
};

export default Menubar;
