package Day2.Date;

import java.time.LocalDate;
import java.time.Month;
import java.time.Period;

public class Main04 {
    public static void main(String[] args) {
        LocalDate today = LocalDate.now();
        LocalDate unix = LocalDate.of(1970, Month.JANUARY, 1);
        Period age = Period.between(unix, today);
        int years = age.getYears();
        int months = (years * 12) + age.getMonths();
        System.out.println(months);
    }
}
