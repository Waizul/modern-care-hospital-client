import styled from "styled-components";
import { ButtonP, ButtonTr, Heading, Link } from "../globalStyles";
import { laptop, tablet } from "../responsive";

import { pathologyTests, } from "../data";
import LabFacilty from "./LabFacility";

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



const LabFacilities = () => {
  return (
    <Container id="pathology">
    <Heading>Our Lab Facilities</Heading>

      <Wrapper>
        {pathologyTests.map((test) => (
          <LabFacilty test={test} key={test.id} />
        ))}
      </Wrapper>
    
    <Link to="/lab"><ButtonP>See Details...</ButtonP></Link>
  </Container>
  )
}

export default LabFacilities