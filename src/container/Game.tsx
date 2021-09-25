import React, { useEffect, useState } from "react";
import InputText from "../components/generic/InputText";
import styled from "styled-components";
import Avatar from "../components/generic/Avatar";
import { colors, gradients } from "../utils/colors";
import Button from "../components/generic/Button";
import { Socket } from "../utils/sokect";
import Text from "../components/generic/Text";
import useInputValue from "../hooks/useInputValue";
import AppContext from "../ctx/AppContext";
import { useContext } from "react";
import { useHistory } from "react-router-dom";
const GameC = styled.div`
  width: 100%;
  height: 100vh;
  display: grid;
  padding: 10px;
  box-sizing: border-box;
  grid-template-rows: 12% 80%;
  .container-players {
    width: 100%;
    box-sizing: border-box;
    overflow-x: scroll;
    display: flex;
    align-items: center;
    gap: 10px;
    padding: 0 10px 10px 0;
    &::-webkit-scrollbar {
      width: 10px;
      height: 8px;
    }
    &::-webkit-scrollbar-track {
      box-shadow: inset 0 0 6px ${colors.textAccent};
      border-radius: 10px;
    }
    &::-webkit-scrollbar-thumb {
      background: ${gradients.primary};
      outline: none;
      border-radius: 10px;
    }
  }
  .container-message {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 10px;
    gap: 2em;
    justify-content: flex-end;
    box-sizing: border-box;
  }
`;
function Game() {

  const { state,setAllUsers }: any = useContext(AppContext);
    const {socket}=state
  const history = useHistory();
 
  if (state.user.name==="" )
  {  history.push("/");}
  
  const player = [
    {
      id: 1,
      state: "send",
    },
    {
      id: 2,
      state: "write",
    },
    {
      id: 3,
      state: "send",
    },
    {
      id: 4,
      state: "send",
    },
    {
      id: 5,
      state: "send",
    },
  ];
  const [load,setLoad]=useState(true)
  const [message, setMessage]: any = useState({
    data: {
      message: [],
    },
  });
 
  useEffect(() => {
  
    socket.connect(setAllUsers, message);
  }, []);

  const start =()=>{
    if (state.user.name.length > 0 && load) {setLoad(false)
      socket.connetUser(state.user.name);
    } else {
      history.push("/");
    }
  }
  
  const { onChange, valueInput } = useInputValue("");
  const handleClick = () => {
    let msg = {
      value: "",
    };
    msg.value = "ddd";
    socket.senMessage({user:state.user.name,message:valueInput});

    // socket.send(JSON.stringify({message:'hola'}))
  };

  return (
    <GameC>
      <div className="container-players">
        {state.data.users.map((e:any) => (
          <Avatar
            key={e}
            name={e}
            imageUrl={`https://picsum.photos/200/300?random=${e} `}
            state={'send'}
          />
        ))}
      </div>

      <div className="container-message">
        {message.data.message.length > 0 &&
          message.data.message.map((e: string, index: number) => (
            <Text key={index} color={"white"} text={e} />
          ))}

        <InputText
          placeholder="Your message"
          defaulValue={valueInput}
          onChange={onChange}
        />
        <Button
          value="send Message"
          background={gradients.primary}
          textColor={"white"}
          action={handleClick}
        />
      </div>
    </GameC>
  );
}

export default React.memo(Game);
