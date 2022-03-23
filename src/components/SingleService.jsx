import styled from "styled-components";
import { Link } from "../globalStyles";
import { tablet, laptop } from "../responsive";

const Container = styled.div`
  width: 100%;
  min-height: 40vh;
  ${tablet({ width: "40vw" })}
  ${laptop({ width: "30vw" })}
`;
const Wrapper = styled.div`
  padding: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const ImgContainer = styled.div`
  width: 100vw;
  padding: 1rem;
  ${tablet({ width: "43vw" })}
  ${laptop({ width: "31vw" })}
`;
const Image = styled.img`
  width: 100%;
  height: 40vh;
  object-fit: cover;
  border-radius: 10px;
`;
const InfoContainer = styled.div`
  padding: 1rem;
  padding-top: 0;
`;
const Title = styled.h3`
  margin-top: 0;
  padding-top: 0;
  color: rgb(28,105,63);
`;
const Desc = styled.p``;
const Price = styled.p`
&>span{
 color: rgb(66,11,255);
}
`;
const Button = styled.button`
  background-color: transparent;
  padding: 5px 0px;
  font-size: 16px;
  font-weight: 500;
  align-self: flex-start;
  cursor: pointer;
`;

const SingleService = ({ service }) => {
  return (
    <Container>
      <Wrapper>
        <ImgContainer>
          <Image src={service.img} alt={service.title} />
        </ImgContainer>
        <InfoContainer>
          <Title>{service.title}</Title>
          <Desc>{service.desc}</Desc>
          {service.price && <Price>Cost:<span> {service.price} tk</span></Price>}
          {service.price2 && <Price>Cost: <span>{service.price2} tk</span></Price>}
          {service.path && (
            <Button>
              <Link to={service.path}>See More...</Link>
            </Button>
          )}
        </InfoContainer>
      </Wrapper>
    </Container>
  );
};

export default SingleService;
