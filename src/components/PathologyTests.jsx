import styled from "styled-components";
import { ButtonP, ButtonTr, Heading, Link } from "../globalStyles";
import { laptop, tablet } from "../responsive";

import { pathologyTests, } from "../data";
import PathologyTest from "./PathologyTest";

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



const PathologyTests = () => {
  return (
    <Container id="pathology">
    <Heading>Our Patholgy</Heading>

      <Wrapper>
        {pathologyTests.map((test) => (
          <PathologyTest test={test} key={test.id} />
        ))}
      </Wrapper>
    
    <Link to="/patholgy"><ButtonP>See Details...</ButtonP></Link>
  </Container>
  )
}

export default PathologyTests