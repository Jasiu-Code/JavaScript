package org.XML.beans;

public class EmailService implements MessageService{

    @Override
    public void send(String message) {
        System.out.println(message);;
    }
}
