import React from "react";
import styled from "styled-components";
import { stateAvatar } from "../../utils/colors";
const AvatarC = styled.div<IProps>`
  width: 76px;
  height: 76px;
  position: relative;
  .state {
    position: absolute;
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background: ${(props: IProps) =>
      props.state === "send" ? stateAvatar.send : stateAvatar.write};
    bottom: 0px;
    right: 5px;
    z-index: 1;
  }
  .name {
    position: absolute;
    width: 76px;
    height: 76px;
    display: none;
    color: white;
    font-weight: 500;
    place-items: center;
  }
  .avatar-img {
    width: 76px;
    height: 76px;
    border-radius: 50%;
  }
  &:hover {
    .name {
      background: #0e0e0e7f;
      border-radius: 50%;
      display: grid;
    }
  }
`;

interface IProps {
  imageUrl?: string;
  state: string;
  name?: string;
}
function Avatar({ imageUrl, state, name }: IProps) {
  return (
    <AvatarC state={state}>
      <span className="state"></span>
      <span className="name">{name}</span>
      <img title={name} className="avatar-img" src={imageUrl} alt="" />
    </AvatarC>
  );
}

export default Avatar;
