import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

//redundant data
userDetails:any={
  1000:{acno:1000,username:"Aju",password:123,balance:0},
  1001:{acno:1001,username:"Abhi",password:123,balance:0},
  1002:{acno:1002,username:"Vinu",password:123,balance:0},
  1003:{acno:1003,username:"Liju",password:123,balance:0}
}

  constructor() { }

  register(acno:any,username:any,password:any){
     var userDetails=this.userDetails
     if(acno in userDetails){
      return false
     }
     else{
      userDetails[acno]={acno,username,password,balance:0}
      return true
     }
  }
}
