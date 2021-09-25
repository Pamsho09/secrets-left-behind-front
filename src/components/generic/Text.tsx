import React from "react";
import styled from "styled-components";
const TextC = styled.p<IProps>`
  width: 100%;
  color:${(props:IProps)=>(props.color)} ;
  font-weight: 500;
  text-transform: capitalize;
  font-size: 20px;
`;
interface IProps {
    text?: string
    color?:string
}
function Text({ text ,color}: IProps) {
  return (
    <>
      <TextC color={color}> {text}</TextC>
    </>
  );
}

export default Text;
