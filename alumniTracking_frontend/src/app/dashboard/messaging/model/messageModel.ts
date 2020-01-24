export class MessageModel{
    public message:string;
    public senderUsername:string;

    public getMessage(){
        return this.message;
    }

    public setMessageContent(message:string){
        this.message=message;
    }

    public getSenderUsername(){
        return this.senderUsername;
    }

    public setSenderUsername(senderUsername:string){
        this.senderUsername=senderUsername;
    }

}