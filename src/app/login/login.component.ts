import { Component, OnInit } from '@angular/core';
import { AsyncSubject } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  acno:any
  psw:any

  aim= "Your Perfect Banking Partner"
  data="Enter Account Number"
  userDetails:any={
    1000:{acno:1000,username:"Aju",password:123,balance:0},
    1001:{acno:1001,username:"Abhi",password:123,balance:0},
    1002:{acno:1002,username:"Vinu",password:123,balance:0},
    1003:{acno:1003,username:"Liju",password:123,balance:0}
  }

  constructor() { }

  ngOnInit(): void {
  }

login(){
  var acno=this.acno
  var psw=this.psw
  var userDetails=this.userDetails

  if(acno in userDetails){
    
   if(psw==userDetails[acno]['password']){
     alert("Login Success")
   }
   else{
    alert("Incorrect Password")
   }
  }
  else{
    alert("User not exists")
  }
}
}






