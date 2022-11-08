package org.example;

import org.example.Zad1.AppConfig;
import org.example.Zad1.MemoryCustomerRepository;
import org.springframework.context.annotation.AnnotationConfigApplicationContext;

public class SpringDiApplication {
    public static void main(String[] args) {
        AnnotationConfigApplicationContext ctx = new AnnotationConfigApplicationContext(AppConfig.class);
//        SimpleCustomerLogger logger = ctx.getBean(SimpleCustomerLogger.class);
//        logger.log();
        MemoryCustomerRepository mcr = ctx.getBean(MemoryCustomerRepository.class);
        mcr.addClient(1, "Imie", "Nazwisko");
        mcr.getClients();

    }
}