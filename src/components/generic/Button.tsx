import React from "react";
import styled from "styled-components";

const ButtonC = styled.div<IButton>`
  background: ${(props: IButton) => props.border};
  border-radius: 10px;
  padding: 2px;
  min-width: 100px;
  min-height: 2em;
  height: auto;
  .module {
      cursor: pointer;
    display: grid;
    place-items: center;

    min-height: 2em;
    padding: 5px;

    border-radius: 10px;
    background: ${(props: IButton) => props.background};
    .text {
      font-size: 25px;
      background: ${(props: IButton) => props.textColor};
      text-transform: capitalize;
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }
  }
`;
interface IButton {
  value?: string;
  textColor?: string;
  background?: string;
  border?: string;
  action?:()=>void
}
function Button({
  value,
  textColor,
  background,
  border,
  action
}: IButton): JSX.Element {
  return (
    <>
      <ButtonC textColor={textColor} background={background} border={border} onClick={action}>
        <div className="module">
          {" "}
          <span className="text">{value}</span>
        </div>
      </ButtonC>
    </>
  );
}

export default Button;
