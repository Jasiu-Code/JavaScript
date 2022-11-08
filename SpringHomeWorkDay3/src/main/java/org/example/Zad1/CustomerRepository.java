package org.example.Zad1;

public interface CustomerRepository {

    void addClient(int ID, String firstName, String lastName);

    void deleteClient(int ID);

    void getClients();
}
