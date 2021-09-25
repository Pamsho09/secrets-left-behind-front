import React, { useState, useContext } from "react";
import styled from "styled-components";
import Button from "../components/generic/Button";
import { gradients, colors } from "../utils/colors";
import Text from "../components/generic/Text";
import Input from "../components/generic/Input";
import AppContext from "../ctx/AppContext";
import useInputValue from "../hooks/useInputValue";
const HomeC = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  padding: 10px;
  box-sizing: border-box;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  h1 {
    margin: 0;
    font-size: 5em;
    font-weight: 600;
    font-style: bold;

    background: ${gradients.primary};
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
  .container-hero {
    width: 100%;
  }
  .container-buttons {
    width: 50%;
    display: grid;
    gap: 2em;
  }
  .container-message {
    width: 80%;
  }
`;
function Home() {
  const { onChange, valueInput } = useInputValue("");
  const message: string = `tell the truth to that person and discover the truths of others.`;
  const { state , setUser ,}:any = useContext(AppContext);
  const handleClickCreate = () => {
    if (valueInput.length > 0) {
      setUser({ name: valueInput });
      console.log(state);
      // setModal("CREATE")
      // console.log(state)
    }
  };

  return (
    <HomeC>
      <div className="container-hero">
        <h1>Secret left behind</h1>
      </div>
      <div className="container-message">
        <Text text={message} color={colors.textAccent} />
      </div>
      <div className="container-buttons">
        <Input
          placeholder="What is your name?"
          type="text"
          defaulValue={valueInput}
          onChange={onChange}
        />
        <Button
          value={"Join"}
          background={colors.background}
          border={gradients.primary}
          textColor={colors.textAccent}
        />
        <Button
          value={"create"}
          action={handleClickCreate}
          background={colors.background}
          border={gradients.primary}
          textColor={colors.textAccent}
        />
      </div>
    </HomeC>
  );
}

export default Home;
