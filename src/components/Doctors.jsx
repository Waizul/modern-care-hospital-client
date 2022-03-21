
import styled from "styled-components";
import {Heading, Link} from '../globalStyles'
import { doctorsData } from "../data";
import { laptop, tablet } from "../responsive";
import Doctor from "./Doctor";

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  padding-top: 100px;
`;

const Wrapper = styled.div`
padding: 0 50px;
display: grid;
gap: 2rem;
${tablet({gridTemplateColumns : 'repeat(2, 1fr)',gap:'1rem'  })}
  ${laptop({gridTemplateColumns : 'repeat(3, 1fr)', gap: '2rem' })}
`;

const Doctors = () => {
  return (
    <Container>
        <Heading>Our Doctors</Heading>
        <Link to ='/doctorsList'>

      <Wrapper>
        {doctorsData.map((doctor) => (
            <Doctor doctor={doctor} key={doctor.id} />
            ))}
      </Wrapper>
            </Link>
    </Container>
  );
};

export default Doctors;
