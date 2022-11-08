package org.test;

import org.springframework.stereotype.Component;

import java.util.ArrayList;
import java.util.List;

@Component
public class ProduktDao {
    public List<Product> getList(){
        List<Product> list = new ArrayList<>();
        list.add(new Product("Lampa",9.99,1L));
        list.add(new Product("Stół",19.99,2L));
        list.add(new Product("Krzesło",29.99,3L));
        list.add(new Product("Dywan",59.99,4L));
        list.add(new Product("Komoda",9.99,5L));
        return list;
    }
}
