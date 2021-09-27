import { Component } from '@angular/core';
import {Account} from "./models/account";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'crud-account';
  accounts: Account[] = [];
  constructor() {
    this.accounts.push(new Account(1,"tuan1","123456","Tuấn","https://scontent.fhan4-3.fna.fbcdn.net/v/t1.6435-9/76912031_2325313354446553_7330612900496670720_n.jpg?_nc_cat=103&ccb=1-5&_nc_sid=0debeb&_nc_ohc=k27u14fpkV4AX9_y1VC&tn=S_GErD8CIjEhUNjE&_nc_ht=scontent.fhan4-3.fna&oh=e063e2992758299cc68eeead300bc375&oe=61758578"));
    this.accounts.push(new Account(2,"thao1","123456","Thao","https://scontent.fhan3-4.fna.fbcdn.net/v/t1.6435-9/147527611_2854675411518937_7962585266187061260_n.jpg?_nc_cat=106&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=KoB5_PqbVfsAX8ZFCR1&_nc_ht=scontent.fhan3-4.fna&oh=bc30cc89382f326733f71e83a3c2e2a1&oe=617524BE"));
    this.accounts.push(new Account(3,"toan1","123456","Toàn","https://scontent.fhan4-1.fna.fbcdn.net/v/t1.6435-9/148197085_2758105261169703_3973284987049806929_n.jpg?_nc_cat=105&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=ezEPyxomFXkAX80Ej03&_nc_ht=scontent.fhan4-1.fna&oh=5179bb4e434b07bd1247fd5969461182&oe=6176E830"));
  }

}
