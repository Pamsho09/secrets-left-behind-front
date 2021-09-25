export class Socket {
  uri: string;
  socket: any;
  constructor(uri: string) {
    this.uri = uri;
    this.socket = new WebSocket("ws://localhost:8080/ws");
  }

  connect(action: any, state?: any) {
    this.socket.onmessage = (event: any) => {
      console.log(event);
      action(JSON.parse(event.data).connected.map((item:any)=>item.user));
    };
  }
  connetUser(user: string) {
    this.socket.send(
      JSON.stringify({
        messages: {
          user: user,
          message: "",
        },
      })
    );
  }
  senMessage(msg: any) {
    this.socket.send(JSON.stringify({ messages: msg }));
  }
}
