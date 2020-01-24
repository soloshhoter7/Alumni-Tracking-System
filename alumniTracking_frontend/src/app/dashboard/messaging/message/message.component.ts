import { Component, OnInit, Input } from '@angular/core';
import { MessageModel } from '../model/messageModel';
import { UserServiceService } from '../user-service.service';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.css']
})
export class MessageComponent implements OnInit {
 @Input() chatMessage:MessageModel;
  incomingMessage:boolean=false;
  outgoingMessage:boolean=true;
 userName:string;
 messageContent:string;

  constructor(public userService:UserServiceService) { }
  
  ngOnInit() {
  this.analyseMessage();
  }
  
  analyseMessage(){

    if(this.chatMessage.senderUsername == this.userService.username){
      console.log("username matches");  
      this.outgoingMessage=true;
      this.incomingMessage=false;
    }else{
      console.log("username don't match!");
       this.outgoingMessage=false;
       this.incomingMessage=true;
    }
  }
 
}
