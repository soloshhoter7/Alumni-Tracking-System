import * as Stomp from '@stomp/stompjs';
import * as SockJS from 'sockjs-client';
import { Message } from '@angular/compiler/src/i18n/i18n_ast';


export class WebSocketAPI {

    webSocketEndPoint: string = 'http://localhost:8080/socket';
    // topic: string = "/topic/greetings";
    stompClient: any;
   
    messageToShown;
   
    initialiseWebSocketConnection(){
        let ws = new SockJS(this.webSocketEndPoint);
        this.stompClient = Stomp.Stomp.over(ws);
        let that = this;
        this.stompClient.connect({},function(frame){
            that.stompClient.subscribe("/chat",(message)=>{
                if(message.body){
                   this.messageToShown=message.body;
                   console.log(message.body);
                }
            })
        })
    }

    sendMessage(message){
        this.stompClient.send("/app/send/message",{},message);
    }
    // _connect() {
    //     console.log("Initialize WebSocket Connection");
    //     let ws = new SockJS(this.webSocketEndPoint);
    //     this.stompClient = Stomp.Stomp.over(ws);
    //     const _this = this;
    //     _this.stompClient.connect({}, function (frame) {
    //         _this.stompClient.subscribe(_this.topic, function (sdkEvent) {
    //             _this.onMessageReceived(sdkEvent);
    //         });
    //         //_this.stompClient.reconnect_delay = 2000;
    //     }, this.errorCallBack);
    // };

//     _disconnect() {
//         if (this.stompClient !== null) {
//             this.stompClient.disconnect();
//         }
//         console.log("Disconnected");
//     }

//     // on error, schedule a reconnection attempt
//     errorCallBack(error) {
//         console.log("errorCallBack -> " + error)
//         setTimeout(() => {
//             this._connect();
//         }, 5000);
//     }

//  /**
//   * Send message to sever via web socket
//   * @param {*} message 
//   */
//     _send(message) {
//         console.log("calling logout api via web socket");
//         this.stompClient.send("/app/hello", {}, JSON.stringify(message));
//     }

//     onMessageReceived(message) {
//         console.log("Message Recieved from Server :: "+message);
//         this.appComponent.handleMessage(JSON.stringify(message.body));
//     }
}