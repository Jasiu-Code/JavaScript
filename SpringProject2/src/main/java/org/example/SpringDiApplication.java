package org.example;

import org.springframework.context.annotation.AnnotationConfigApplicationContext;

public class SpringDiApplication {
    public static void main(String[] args) {
        AnnotationConfigApplicationContext context =
                new AnnotationConfigApplicationContext(AppConfig.class);
        PersonService person = context.getBean(PersonService.class);
        System.out.println(person.getPersonrepo().getClass().getName());

//        Ship ship = context.getBean("blackPearl", Ship.class);
//        ship.getCaptain().startSailing();
//        ScopeSingleton singleton1 = context.getBean(ScopeSingleton.class);
//        System.out.println(singleton1);
//        ScopeSingleton singleton2 = context.getBean(ScopeSingleton.class);
//        System.out.println(singleton2);
//        System.out.println((singleton1 == singleton2) + ": ten sam obiekt\n");
//        ScopePrototype prototype1 = context.getBean(ScopePrototype.class);
//        System.out.println(prototype1);
//        ScopePrototype prototype2 = context.getBean(ScopePrototype.class);
//        System.out.println(prototype2);
//        System.out.println((prototype1 == prototype2) + ": dwa różne obiekty");



    }
}