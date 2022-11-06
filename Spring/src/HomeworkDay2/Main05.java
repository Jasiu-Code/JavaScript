package HomeworkDay2;

import java.time.DayOfWeek;
import java.time.LocalDate;
import java.time.temporal.TemporalAdjusters;

public class Main05 {
    public static void main(String[] args) {
        LocalDate lastDayofCurrentMonth = LocalDate.now().with(TemporalAdjusters.lastDayOfMonth());
        System.out.println(lastDayofCurrentMonth.getDayOfWeek());
        LocalDate nextFriday = LocalDate.now().with(TemporalAdjusters.next(DayOfWeek.FRIDAY));
        System.out.println(nextFriday);
        LocalDate firstDayOfNextMounth = LocalDate.now().with(TemporalAdjusters.firstDayOfNextMonth());
        System.out.println(firstDayOfNextMounth.getDayOfWeek());

    }
}