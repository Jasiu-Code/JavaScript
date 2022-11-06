package Day2.StreamApi;

import java.util.Arrays;
import java.util.List;
import java.util.stream.Collectors;

public class Main03 {
    public static void main(String[] args) {
        List<Integer> numbers = Arrays.asList(1, 2, 3, 4, 5, 6, 7, 8, 9);
        List<Integer> collect = numbers.stream()
                .map(n -> n * n - 5)
                .filter(n -> n < 20)
                .collect(Collectors.toList());
        collect.stream()
                .forEach(System.out::println);

    }
}
