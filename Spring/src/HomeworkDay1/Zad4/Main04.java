package HomeworkDay1.Zad4;

import java.util.ArrayList;
import java.util.List;

public class Main04 {
    public static void main(String[] args) {
        List<User> list = new ArrayList<>();
        Employee e = new Employee();
        Company c = new Company();
        list.add(e);
        list.add(c);

        for(User u : list){
         if(u instanceof Payable){
             ((Payable) u).pay();
         }
        }

    }
}
