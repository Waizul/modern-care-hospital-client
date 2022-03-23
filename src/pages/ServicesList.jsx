import styled from "styled-components";
import SingleService from "../components/SingleService";
import { laptop, tablet } from "../responsive";

import servicesListData from "../servicesListData";

const Container = styled.div`
  width: 100%;
  min-height: 100vh;
  position: relative;
  top: 70px;
  padding-bottom: 5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  overflow: hidden;
`;
const Wrapper = styled.div`
 display: grid;
  grid-template-columns: 1fr;
  row-gap: 20px;
  margin: 0 2%;
  ${tablet({ gridTemplateColumns: "repeat(2, 1fr)", columnGap: ".5rem" })}
  ${laptop({ gridTemplateColumns: "repeat(3, 1fr)", columnGap: "1rem" })}
`;
const Title = styled.h1`
  text-align: center;
  padding-top: 10px;
`;

const ServicesList = () => {
  return (
    <Container>
      <Title>Our services</Title>
      <Wrapper>
        {servicesListData.map((service) => (
          <SingleService service={service} key={service.id} />
        ))}
      </Wrapper>
    </Container>
  );
};

export default ServicesList;
