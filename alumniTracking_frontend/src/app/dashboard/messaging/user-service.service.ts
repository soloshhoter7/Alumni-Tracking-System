import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {
 public username:string;
 
 constructor() { }
 
 getUsername(){
   return this.username;
 }

 setUsername(username:string){
   this.username=username;
   console.log("username saved as : "+this.username);
 }
}
