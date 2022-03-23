import styled from 'styled-components';
import {mobile, tablet, laptop} from '../responsive'
import arrowl from '../icons/arrowl.png'
import arrowr from '../icons/arrowr.png'
import { useState } from 'react';
import {bannerItems} from '../data'
import { Link } from '../globalStyles';

const Container = styled.div`
  width: 100vw;
  height: 70vh;
  display: flex;
  overflow: hidden;
  position: relative;
  top:60px;
  ${tablet({ height: "calc(100vh - 60px)" })}
  ${laptop({ height: "calc(100vh - 60px)" })}
`;
const Arrow = styled.div`
  width: 50px;
  height: 50px;
  background-color: rgba(1,100,1,0.5);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 50%;
  bottom: 0;
  left: ${(props) => props.direction === "left" && "5px"};
  right: ${(props) => props.direction === "right" && "5px"};
  /* margin: auto; */
  cursor: pointer;
  opacity: 0.5;
  z-index: 2;
`;
const Icon = styled.img`
width: 100%;
`
const Wrapper = styled.div`
  display: flex;
  transition: all 1.5s ease;
  transform: TranslateX(${(props) => props.slideIndex * -100}vw);
`;
const Slide = styled.div`
  width: 100vw;
  height: 70vh;
  background-color: #${(props) => props.bg};
  position: relative;
  ${laptop({height:'calc(100vh - 60px)'})}
  ${tablet({height:'calc(100vh - 60px)'})}
`;
const ImgContainer = styled.div`
  width: 100%;
  height: 100%;
`;
const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;
const InfoContainer = styled.div`
width: 50vw;
display: flex;
flex-direction: column;
justify-content: center;
  padding: 40px;
  position: absolute;
  bottom:0;
`;
const Title = styled.h1`
  font-size: 28px;
  color: rgb(5,5,105);
width: 80%;
  ${tablet({ fontSize: "40px", width: "80%" })}
  ${laptop({fontSize:'50px'})}
`;
const Desc = styled.p`
  color: red;
  margin: 40px 0px;
  font-size: 14px;
  font-weight: 500;
  letter-spacing: 3px;
  ${mobile({
    fontSize: "14px",
    width: "80%",
    margin: "5px 0px",
    background: "transparent",
    letterSpacing: "1.5px",
  })}
  ${tablet({
    fontSize: "14px",
    width: "80%",
    margin: "5px 0px",
    letterSpacing: "1.5px",
  })}
`;
const Button = styled.button`
max-width: fit-content;
font-size: 16px;
font-weight: 500;
color: rgb(5,5,105);
    padding: 10px 15px;
    letter-spacing: 1.5px;
  background-color:transparent;
  border: 2px solid ;
  cursor: pointer;
  &:hover {
    transform: translateX(1px);
    color: blue;
    font-weight: bold;
  }
`;


const Banner = () => {
    const [slideIndex, setSlideIndex] = useState(0)
    
    const handleClick = (direction) => {
        if (direction === 'left') {
        setSlideIndex(slideIndex>0?slideIndex-1:3)
        } else {
        setSlideIndex(slideIndex<3? slideIndex+1:0)
        }
    };

  return (
    <Container id='banner'>
    <Arrow direction='left' onClick={() => handleClick('left')}>
          <Icon src={arrowl} alt='left arrow' /> 
        </Arrow>
        <Wrapper slideIndex={slideIndex}>
            {bannerItems.map((item) => (
                <Slide bg={item.bg} key={item.id}>
                    <ImgContainer>
                        <Image src={item.img} alt='' />
                    </ImgContainer>
                    <InfoContainer>
                        <Title>{item.title}</Title>
                        <Desc>{item.desc}</Desc>
                     <Link to='/appointment'>
                          <Button>GET AN APPOINTMENT</Button>
                          </Link>
                    </InfoContainer>
                </Slide>
            ))}
        </Wrapper>
        <Arrow direction='right' onClick={() => handleClick('right')}>
           <Icon src={arrowr} alt='arrow right' />
        </Arrow>
</Container>
  )
}

export default Banner