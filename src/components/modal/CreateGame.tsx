import React, { useContext, useEffect, useState } from "react";
import styled from "styled-components";
import close from "../../assets/close.svg"
import AppContext from "../../ctx/AppContext";
import { Icon } from "../generic/Icon";
const Create = styled.div`
  width: 80%;
  box-sizing: border-box;
  max-width: 450px;
  background-color: white;
  min-height: 50vh;
  border-radius: 30px;
  padding: 30px;
  display: grid;
  place-items: center;
  position: relative;
  h2,h3{
      margin: 0;
  }
  .close{
      position: absolute;
      width: 35px;
      height: 35px;
      top:10px;
      right: 10px;
    cursor: pointer;
  }
  .container-message {
    margin: auto;
    width: 80%;
    display: flex;
    border-radius: 5px;
    border:solid 2px #585858;
    h4 {
      width: 100%;
      margin: 10px;
    }
    svg{
      padding: 5px;
      cursor: pointer;
      border: ra;
      &:hover{
        border-radius: 10px;
       background-color: #58585853;
      }
    }
    }
`;
function CreateGame() {
    const { state }: any = useContext(AppContext);
  const [game, setGame] = useState("");
  const fetcher = async (url: string) =>
    fetch(url)
      .then((r) => r.json())
      .then((data) => data);
  useEffect( ()=>{
   const get= async () => {
        setGame(await fetcher("http://localhost:8080/generate-game"));

      }
      get()
  }, []);

  return (
    <Create>
             <img src={close} alt="cerrar" className="close" />
        <h2>Hello {state.user.name}</h2>
        <h3>Hello, your game has been created, share this code with your friends to start the game.</h3>
        <div className="container-message">
          <h4>{game}</h4>
          <Icon color={`#585858`} url={game||""} />
        </div>
    </Create>
  );
}

export default CreateGame;
