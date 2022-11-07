package org.XML.beans;

public class MessageSender {
    private MessageService messageService;
    private String message;

    public MessageService getMessageService() {
        return messageService;
    }

    public void setMessageService(MessageService messageService) {
        this.messageService = messageService;
    }

    public String getMessage() {
        return message;
    }

    public void setMessage(String message) {
        this.message = message;
    }

    public MessageSender(MessageService messageService){
        this.messageService = messageService;
    }
    public void sendMessage() {
        messageService.send(message);
    }
    public void sendMessageFromProperty(){
        messageService.send(message);
    }
}
