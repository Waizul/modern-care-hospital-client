import styled from "styled-components";
import { Link as l, NavLink as nlink } from "react-router-dom";

export const Link = styled(l)`
  color: inherit;
`;

export const NavLink = styled(nlink)`
  color: inherit;
  /* &.active {
    border-bottom: 2px solid red;
  } */

  &:hover{
    transform: scaleX(1.1);
  }
`;

export const A = styled.a`
  color: inherit;
`;

export const Heading = styled.h1`
color: olivedrab;
font-size: 40px;
border-bottom: 2px solid olive;
width: max-content;
`
export const Button = styled.button`
  /* display: inline-block; */
  min-width: ${(props) => (props.primary ? "100px" : "100px")};
  margin-right: 20px;
  margin-top: 10px;
  padding: 10px 30px;
  font-size: ${(props) => (props.primary ? "16px" : "16px")};
  border: none;
  border-radius: 10px;
  color: white;
  background-color: ${(props) =>
    props.primary ? "rgb(11,11,55)" : "rgb(160,1,1)"};
  cursor: pointer;

  &:hover {
    transform: translateX(1px);
    background-color: ${(props) =>
      props.primary ? "rgb(11,11,66)" : "rgb(170,1,1)"};
  }
`;
