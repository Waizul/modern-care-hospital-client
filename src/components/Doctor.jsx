import styled from "styled-components";

const Container = styled.div`
width: 100%;
height: 100%;
`
const Wrapper = styled.div`
display: flex;
justify-content: center;
gap: 10px;
`
const ImgContainer = styled.div`
margin-top: 0.5rem;
flex: 1;
`
const Image = styled.img`
width: 100%;
height: 100%;
`
const InfoContainer = styled.div`
flex: 2;
color: rgba(0,0,0,.8);
`
const Name = styled.h4`
margin-bottom: 0;
`
const Speciality = styled.p`
font-size: 12px;
font-weight: 400;
margin-top: 5px;
`
const Available = styled.p`
font-size: 12px;
margin: 0;
`
const Degree = styled.p`
font-size: 12px;
margin:0;
`;
const Review = styled.p`

`

const Doctor = ({doctor}) => {
  return (
    <Container>
        <Wrapper>

        <ImgContainer>
        <Image src={doctor.profilePic} alt=''/></ImgContainer>
        <InfoContainer>
            <Name>{doctor.name}</Name>
            <Speciality>{doctor.speciality}</Speciality>
            <Available>Time: {doctor.time}</Available>
            <Available>Day: {doctor.day}</Available>
            <Degree>Degrees: {doctor.degrees}</Degree>
        </InfoContainer>
        </Wrapper>
            <Review>review: 5 star</Review>
    </Container>
  )
}

export default Doctor