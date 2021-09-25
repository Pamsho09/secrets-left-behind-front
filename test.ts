interface IMyObecjt {
  name: string;
  lastName: string;
  email: string[] | string;
  userName?: string;
  isStream?: boolean;
}
interface User {
  name: string;
  userName: string;
}
class myObjectClass {
  name: string;
  lastName: string;
  email: string[] | string;
  userName?: string;
  isStream?: boolean;
  constructor(
    name: string,
    lastName: string,
    email: string[] | string,
    userName?: string,
    isStream?: boolean
  ) {
    this.name = name;
    this.lastName = lastName;
    this.email = lastName;
    this.userName = userName;
    this.isStream = isStream;
  }
}

let myObject = new myObjectClass(
  "pamsho",
  "dev",
  "me@pamsho.dev",
  "pansho",
  true
);

console.log(myObject)
function getInfo(data: myObjectClass): User {
  if (data.userName) {
    return {
      name: "",
      userName: "",
    };
  } else {
    return {
      name: data.name,
      userName: data.name + data.email,
    };
  }
}

getInfo({ name: "aldavid", email: ["asdad", "adsdas"], lastName: "01" });
