import styled from "styled-components";
import LabFacilities from "../components/LabFacilities";
import TestsPrice from "../components/TestsPrice";

const Container = styled.div`
  position: relative;
  top: 70px;
`;
const Wrapper = styled.div`
  margin-bottom: 8rem;
`;
const Title = styled.h2`
  margin: 0 auto;
  padding-top: 3rem;
  margin-bottom: 1.5rem;
  border-bottom: 2px solid black;
  width: max-content;
  text-align: center;
`;
const Pathology = () => {
  return (
    <Container>
      <Wrapper>
        <Title>Our Tests Pricing</Title>
        <TestsPrice />
      </Wrapper>
    </Container>
  );
};

export default Pathology;
