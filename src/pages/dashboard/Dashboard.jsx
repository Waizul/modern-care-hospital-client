import styled from "styled-components";

const Container = styled.div`
  min-height: calc(100vh - 70px);
  position: relative;
  top: 70px;
  z-index: -1;
`;
const Topbar = styled.div`
  height: 60px;
  background-color: darkblue;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
const TopList = styled.ul`
display: flex;
align-items: center;
justify-content: center;
/* margin-left: 7rem; */
`
const TopItem = styled.div`
width: 160px;
color: white;
font-size: 1.2rem;
font-weight: 500;
cursor: pointer;
`
const Wrapper = styled.div`
display: flex;
height: 100%;
`
const Sidebar = styled.div`
flex:3;
min-height: 100vh;
padding: 4rem .5rem;
background-color: darkblue;
`
const SidebarList = styled.ul`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
gap: 1rem;
`
const SidebarItem = styled(TopItem)`

`
const Main = styled.div`
flex: 9;
`
const Dashboard = () => {
  return (
    <Container>
      <Topbar>
        <TopList>
          <TopItem>Dashboard</TopItem>
        </TopList>
      </Topbar>
      <Wrapper>
        <Sidebar>
          <SidebarList>
            <SidebarItem>Appointments</SidebarItem>
            <SidebarItem>Bill</SidebarItem>
            <SidebarItem>Payment</SidebarItem>
            <SidebarItem>Review</SidebarItem>
          </SidebarList>
        </Sidebar>
<Main></Main>
      </Wrapper>
    </Container>
  );
};

export default Dashboard;
