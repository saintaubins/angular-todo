import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

username = 'in28minuets'
password = ''
errorMessage = 'Invalid Credentials'
invalidLogin = false

  constructor() { }

  ngOnInit() {
  }

  handleLogin() {
    //console.log(this.username)
    if(this.username==="in28minuets" && this.password === "dummy") {
      this.invalidLogin = false
    } else {
      this.invalidLogin = true
    }

  }

}
