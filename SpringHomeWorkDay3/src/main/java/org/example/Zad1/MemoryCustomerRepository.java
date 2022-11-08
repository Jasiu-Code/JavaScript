package org.example.Zad1;

import org.springframework.beans.factory.annotation.Autowired;

import java.util.ArrayList;
import java.util.List;

public class MemoryCustomerRepository implements CustomerRepository {

    private List<Customer> customers;

    private CustomerLogger customerLogger;

    public MemoryCustomerRepository(CustomerLogger customerLogger) {
        this.customerLogger = customerLogger;
        customers = new ArrayList<>();
    }

    @Override
    public void addClient(int ID, String firstName, String lastName) {
        customerLogger.log();
        customers.add(new Customer(ID, firstName, lastName));
    }

    @Override
    public void deleteClient(int ID) {
        customerLogger.log();
        for (Customer c : customers) {
            if (c.getId() == ID) {
                customers.remove(c);
            }
        }

    }

    @Override
    public void getClients() {
        customerLogger.log();
        for (Customer c : customers) {
            System.out.println(c);
        }

    }
}
