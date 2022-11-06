package HomeworkDay1;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.Collections;
import java.util.List;

public class Main02 {
    public static void main(String[] args) {
        List<Person> people = new ArrayList<>();
        Person person1 = new Person("Adam","Adamski");
        Person person2 = new Person("Michał","Michałowski");
        Person person3 = new Person("Krzysztof","Krzysztof");
        people.add(person1);
        people.add(person2);
        people.add(person3);

        Collections.sort(people);

        for (Person person : people) {
            System.out.println(person);
        }


    }
}
