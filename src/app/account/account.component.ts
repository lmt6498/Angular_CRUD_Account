import {Component, Input, OnInit} from '@angular/core';
import {Account} from "../models/account";

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit {
  @Input()
  accounts: Account[] = [];

  id!: number;
  userName!: string;
  password!: string;
  name!: string;
  img!: string;

  constructor() {
  }

  ngOnInit(): void {
  }

  create() {
    this.accounts.push(new Account(this.id, this.userName, this.password, this.name, this.img));
  }

  showEdit(id: number) {
    for (let i = 0; i < this.accounts.length; i++) {
      if (this.accounts[i].id === id) {
        this.userName = this.accounts[i].userName;
        this.password = this.accounts[i].password;
        this.name = this.accounts[i].name;
        this.img = this.accounts[i].img;
        return;
      }
    }
  }

  edit(id: number) {
    for (let i = 0; i < this.accounts.length; i++) {
      if (this.accounts[i].id === id) {
        this.accounts[i] = new Account(this.id, this.userName, this.password, this.name, this.img);
      }
    }
  }


  delete(id: any) {
    for (let i = 0; i < this.accounts.length; i++) {
      if (this.accounts[i].id === id) {
        this.accounts.splice(i,1);
        return;
      }
    }
  }
}
