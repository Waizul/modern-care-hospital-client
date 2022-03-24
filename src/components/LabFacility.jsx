import styled from "styled-components";

const Container = styled.div`
 max-width: max-content;
  padding: 5px;
  border-radius: 10px;
  /* -webkit-box-shadow: -1px 2px 9px 2px rgba(0, 0, 0, 0.53);
  box-shadow: -1px 2px 9px 2px rgba(0, 0, 0, 0.53); */
`;

const Image = styled.img`
  width: 90%;
  height: 220px;
  object-fit: cover;
  border-radius: 10px;
`;
const Name = styled.h5`
  font-size: 20px;
  letter-spacing: 1.1px;
  margin: 10px 0;
`;
const Desc = styled.p`
text-align: justify;
width: 80%;
margin: 0 auto;
`;

const LabFacilty = ({test}) => {
  return (
    <Container>
      <Image src={test.img} alt={test.name} />
      <Name>{test.name}</Name>
      <Desc>{test.desc}</Desc>
    </Container>
  )
}

export default LabFacilty