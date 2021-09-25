import React, { useState ,useEffect} from "react";
import { initialState, IInitialState, IUser, IModal } from "../initialState";

// export interface IUseInitialState {
//   state: IInitialState;
//   setUser?: (payload: IUser) => void;
//   setModal?: (payload: IModal) => void;
// }
export const useInitialState = () => {
  const [state, setState]: any = useState(initialState);
  
  // setState("asdasd")
  // console.log("hola juancarlos chupa pija", state);
  const setUser = (payload: IUser) => {
    setState({
      ...state,
      user: payload,
    });
  };
  const setModal = (payload: IModal) => {
    setState({
      ...state,
      modal: payload,
    });
  };
  // const setAllUsers = (payload: any) => {
  //   setState({
  //     ...state,

  //     data: {
  //       users: payload,
  //     },
  //   });
  // };

  return {
    state,
    setUser
  };
};
