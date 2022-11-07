package org.XML.app;

import org.XML.beans.MessageSender;
import org.springframework.context.support.ClassPathXmlApplicationContext;

public class SpringDiApplication {
    public static void main(String[] args) {
        ClassPathXmlApplicationContext context =
                new ClassPathXmlApplicationContext("beans.xml");
        MessageSender em = (MessageSender) context.getBean("ms");
        em.sendMessageFromProperty();

        context.close();

    }
}
