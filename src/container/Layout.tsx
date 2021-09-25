import React, { useContext } from "react";
import styled, { createGlobalStyle } from "styled-components";
import Modal from "../components/modal/Modal";
import AppContext from "../ctx/AppContext";
import { colors } from "../utils/colors";
const Global = createGlobalStyle`
body{
margin:0;
padding:0;
background-color: ${colors.background};
display: grid;
place-items: center;
font-family: 'Montserrat', sans-serif;
}
#root{
    width:100%;
    display: grid;
    place-items: center;
}
`;
const LayoutC = styled.div`
width:100%;
height: auto;
box-sizing: border-box;
max-width: 450px;

`;
function Layout({ children }: JSX.ElementChildrenAttribute) {
  const { state }: any = useContext(AppContext);
  return (
    <>
      <LayoutC>{children}</LayoutC>
     
     {/* {state.modal.state&&   <Modal type={state.modal.type}/>} */}
     <Global />
    </>
  );
}

export default Layout;
