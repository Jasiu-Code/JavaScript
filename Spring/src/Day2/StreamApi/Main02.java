package Day2.StreamApi;

import java.time.Year;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

public class Main02 {
        public static int getAge(int year){
            return Year.now().getValue() - year;
        }
    public static void main(String[] args) {
        Employee employee1 = new Employee("Adam","Adamski",'M',1990,3000);
        Employee employee2 = new Employee("Maciej","Nowacki",'M',1994,3000);
        Employee employee3 = new Employee("Anna","Marciniak",'F',1998,3000);
        Employee employee4 = new Employee("Joanna","Kowalska",'F',1990,3000);
        List<Employee> employees = Arrays.asList(employee1,employee2,employee3,employee4);

        employees.stream()
                .filter(x -> x.getSurname().startsWith("N"))
                .forEach(System.out::println);
        System.out.println("------------------------------");
        employees.stream()
                .filter(x->(getAge(x.getYearOfBirth()))>30 && (getAge(x.getYearOfBirth()))< 45)
                .forEach(System.out::println);
        System.out.println("------------------------------");
        employees.stream()
                .filter(x->x.getGender()=='F')
                .filter(x->(getAge(x.getYearOfBirth()))>20 && (getAge(x.getYearOfBirth()))< 30)
                .forEach(x -> x.setSalary((x.getSalary()*105)/100));
        System.out.println(employees.get(2));
    }
}
