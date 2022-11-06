package Day2.Date;

import java.time.LocalDate;
import java.time.Month;

public class Main02 {
    public static void getDay(){
        for(int i =0;i<10;i++){
            LocalDate date = LocalDate.of(2022 + i , Month.DECEMBER, 24);
            System.out.println(date.getDayOfWeek());
        }

    }
    public static void main(String[] args) {
        getDay();
    }
}

