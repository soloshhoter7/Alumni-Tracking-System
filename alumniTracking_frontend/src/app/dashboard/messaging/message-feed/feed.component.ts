import { Component, OnInit } from '@angular/core';
import { MessageModel } from '../model/messageModel';
import { ChatServiceService } from '../chat-service.service';

@Component({
  selector: 'app-message-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.css']
})
export class MessageFeedComponent implements OnInit {
  chatMessages:MessageModel[]=[];
  constructor(public chatService:ChatServiceService) { }

  ngOnInit() {
    this.chatMessages=this.chatService.chat;
  }

}
