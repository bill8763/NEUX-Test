import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'snd-login-controller',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    const bodyEle = document.body;
    console.log('body height:',  bodyEle.clientHeight);
  }

}
