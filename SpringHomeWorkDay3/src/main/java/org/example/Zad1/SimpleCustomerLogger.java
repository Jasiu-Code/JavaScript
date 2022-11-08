package org.example.Zad1;

import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.time.LocalTime;

@Service("SimpleCustomerLogger")
public class SimpleCustomerLogger implements CustomerLogger {
    @Override
    public void log() {
        System.out.println(LocalDate.now() + " " + LocalTime.now() + " Customer operation: ");
    }
}
