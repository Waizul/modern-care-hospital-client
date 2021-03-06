import styled from "styled-components";
import { Link as l } from "react-router-dom";
import {NavHashLink} from 'react-router-hash-link'

export const Link = styled(l)`
  color: inherit;
`;

export const NavLink = styled(NavHashLink)`
color: inherit;
`

export const A = styled.a`
  color: inherit;
`;

export const Heading = styled.h1`
color: olivedrab;
font-size: 35px;
border-bottom: 2px solid olive;
width: max-content;
margin: 0 auto;
margin-bottom: 50px;
`
export const Button = styled.button`
  width: max-content;
  padding: 10px 30px;
  font-size: 16px;
  border: none;
  border-radius: 10px;
  color: white;
  background-color: ${(props) =>
    props.red ? "rgb(160,1,1)" : "rgb(11,11,55)" };
  cursor: pointer;

  &:hover {
    transform: translateX(1px);
    background-color: ${(props) =>
      props.red ? "rgb(170,1,1)" : "rgb(11,11,66)" };
  }
`;
 export const ButtonP = styled.button`
 width: max-content;
 padding: 5px 10px;
 margin-top: 20px;
 font-size: 20px;
 font-weight: 500;
 color: white;
 background:rgb(28,105,63);
 border-radius: 5px;
 cursor: pointer;
 text-align: left;

 &:hover{
   font-weight: bold;
 }
 `