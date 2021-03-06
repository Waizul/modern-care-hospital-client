import styled from "styled-components";
import { ButtonP, ButtonTr, Heading, Link } from "../globalStyles";
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
    <Container id="services">
      <Heading>Our Services</Heading>

      <Wrapper>
        {servicesData.map((service) => (
          <Service service={service} key={service.id} />
        ))}
      </Wrapper>

      <Link to="/services">
        <ButtonP>See Details...</ButtonP>
      </Link>
    </Container>
  );
};

export default Services;
