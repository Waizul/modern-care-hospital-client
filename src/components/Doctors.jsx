import styled from "styled-components";
import { ButtonP, Heading, Link } from "../globalStyles";
import { doctorsData } from "../data";
import { laptop, tablet } from "../responsive";
import Doctor from "./Doctor";

const Container = styled.div`
  width: 100vw;
  min-height: 95vh;
  padding-top: 100px;
  text-align: center;
`;

const Wrapper = styled.div`
text-align: left;
  padding: 0 50px;
  display: grid;
  gap: 2rem;
  ${tablet({ gridTemplateColumns: "repeat(2, 1fr)", gap: "1rem" })}
  ${laptop({ gridTemplateColumns: "repeat(3, 1fr)", gap: "2rem" })}
`;

const Doctors = () => {
  return (
    <Container id="doctors">
      <Heading>Our Doctors</Heading>

      <Wrapper>
        {doctorsData.map((doctor) => (
          <Doctor doctor={doctor} key={doctor.id} />
        ))}
      </Wrapper>

      <Link to="/doctors">
        <ButtonP>See More...</ButtonP>
      </Link>
    </Container>
  );
};

export default Doctors;
