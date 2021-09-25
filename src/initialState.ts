import { Socket } from "./utils/sokect";
export interface IInitialState{
  socket:any
  user:IUser
  data:IData
  modal:IModal

}

export interface IModal{
  state:boolean
  type:string
}
interface IData{

  users:IUser[]
}

export interface IUser{
  name:string
}
export const initialState: IInitialState = {
  socket: new Socket("ws://localhost:8080/ws"),
  user: {
    name: '',
  },
  data: {
    users: [],
  },
  modal:{
      state:false,
      type:''
  }
};
