package Day2.StreamApi;

import java.util.Arrays;
import java.util.List;
import java.util.stream.Collectors;

public class Main01 {
    public static void main(String[] args) {
        List<String> list = Arrays.asList("pies","kot","ptak","anakonda","slon","lew","antylopa","szczupak","zuraw");
        list.stream()
                .filter(s->(s.startsWith("a") || s.startsWith("s")))
                .forEach(System.out::println);
        System.out.println("----------------------");
        list.stream()
                .filter(s->s.length() ==5)
                .forEach(System.out::println);
        System.out.println("----------------------");
        String joined = list.stream()
                .sorted()
                .map(s->s.substring(0,3))
                .collect(Collectors.joining(","));
        System.out.println(joined);
    }
}