export class Account {
  id: number;
  userName: string;
  password: string;
  name: string;
  img: string;


  constructor(id: number, userName: string, password: string, name: string, img: string) {
    this.id = id;
    this.userName = userName;
    this.password = password;
    this.name = name;
    this.img = img;
  }
}
