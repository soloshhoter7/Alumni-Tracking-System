import { Component, OnInit } from '@angular/core';
import * as Stomp from '@stomp/stompjs';
import * as SockJS from 'sockjs-client';
import { MessageModel } from '../model/messageModel';
import { UserServiceService } from '../user-service.service';
import { ChatServiceService } from '../chat-service.service';

@Component({
  selector: 'app-chat-form',
  templateUrl: './chat-form.component.html',
  styleUrls: ['./chat-form.component.css']
})
export class ChatFormComponent implements OnInit {
  message = new MessageModel();
  messageText:string;
  messageToAdd = new MessageModel();
  constructor(public userService:UserServiceService,public chatService:ChatServiceService) { }

  ngOnInit() {
    this.initialiseWebSocketConnection();
  }
 
  messageToShown="fuck em all";
  webSocketEndPoint: string = 'http://localhost:8080/socket';
  stompClient: any;
  
   //for initialising websocket connection
  initialiseWebSocketConnection(){
      let ws = new SockJS(this.webSocketEndPoint);
      let messageToPass = new MessageModel();
      this.stompClient = Stomp.Stomp.over(ws);
      let that = this;
      this.stompClient.connect({},function(frame){
          that.stompClient.subscribe("/chat",(message)=>{
            console.log("Connection established !!!");
            
            messageToPass=JSON.parse(message.body);
            console.log("message in chat form"+messageToPass.message); 
            that.chatService.addMessage(messageToPass);
          })

      })
  }
   
  //for sending the message
  sendMessage(){
      this.message.message=this.messageText;
      this.message.senderUsername=this.userService.getUsername();
      console.log(this.message.getSenderUsername()+" : "+this.message.getMessage()+"in angular");
      this.stompClient.send("/app/send/message",{},JSON.stringify(this.message));
      this.messageText='';
  }

  // for handling the enter submit event
  handleSubmit(event){
    if(event.keyCode === 13){
      this.sendMessage();
    }
  }
}
