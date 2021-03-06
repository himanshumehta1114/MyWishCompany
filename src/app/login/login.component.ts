import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private router: Router) {}

  goRegister() {
    this.router.navigate(['register']);
  }

  goForgot() {
    this.router.navigate(['forgot']); 
  }

  ngOnInit() {
  }

}
