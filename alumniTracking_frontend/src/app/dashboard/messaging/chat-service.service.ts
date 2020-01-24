import { Injectable } from '@angular/core';
import { MessageModel } from './model/messageModel';

@Injectable({
  providedIn: 'root'
})
export class ChatServiceService {
 
  chat:MessageModel[]=[];

  addMessage(message:MessageModel){
    console.log("message added  : "+message);
    this.chat.push(message);
  }

  constructor() { }
}
