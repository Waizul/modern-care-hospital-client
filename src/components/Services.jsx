import styled from "styled-components";
import { Heading, Link } from "../globalStyles";
import { laptop, tablet } from "../responsive";
import Service from "./Service";
import { servicesData } from "../data";

const Container = styled.div`
  padding-top: 120px;
  text-align: center;
`;
const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  row-gap: 20px;
  margin: 0 2%;
  ${tablet({ gridTemplateColumns: "repeat(2, 1fr)", columnGap: "20px" })}
  ${laptop({ gridTemplateColumns: "repeat(3, 1fr)", columnGap: "30px" })}
`;

const Services = () => {
  return (
    <Container>
      <Heading>Our Services</Heading>
      <Link to="/services">
        <Wrapper>
          {servicesData.map((service) => (
            <Service service={service} key={service.id} />
          ))}
        </Wrapper>
      </Link>
    </Container>
  );
};

export default Services;
