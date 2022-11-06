package Day2.StreamApi;

import java.util.Arrays;
import java.util.List;
import java.util.stream.Collectors;

public class Main04 {
    public static void main(String[] args) {
        List<String> stringList = Arrays.asList("pies", "kot", "wielblad", "ptak");
        stringList.stream()
                .forEach(s -> System.out.println(s.length()));
        System.out.println("---------------");
        List<String> sortedList = stringList.stream()
                .sorted()
                .collect(Collectors.toList());
        sortedList.stream()
                .forEach(System.out::println);
        System.out.println("---------------");
        stringList.stream()
                .filter(s->s.contains("t"))
                .forEach(System.out::println);
        System.out.println("---------------");
        int res = stringList.stream()
                .mapToInt(s ->s.length())
                .sum();
        System.out.println(res);

    }
}
