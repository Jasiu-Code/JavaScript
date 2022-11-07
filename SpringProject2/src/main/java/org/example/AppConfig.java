package org.example;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.context.annotation.Configuration;


@Configuration
@ComponentScan(basePackages = "org.example")
public class AppConfig {
    @Bean
    public HelloWorld helloWorld() {
        return new HelloWorld();
    }
    @Bean
    public Captain jackSparrow() {
        return new Captain();
    }

    @Bean
    public Ship blackPearl() {
        return new Ship(jackSparrow());
    }
    @Bean
    public ScopePrototype scopePrototype(){
        return new ScopePrototype();
    }
    @Bean
    public ScopeSingleton scopeSingleton(){
        return new ScopeSingleton();
    }



}