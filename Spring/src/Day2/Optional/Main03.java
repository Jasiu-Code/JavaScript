package Day2.Optional;

import java.util.Arrays;
import java.util.List;
import java.util.Optional;

public class Main03 {
    public static void main(String[] args) {
        List<Optional<String>> listOfOptionals = Arrays.asList(
                Optional.empty(), Optional.of("java"), Optional.empty(), Optional.of("python"), Optional.of("php"), Optional.empty(), Optional.of(""));
        listOfOptionals.stream()
                .filter(x->x.isPresent())
                .filter(x -> x.get().length() > 0)
                .forEach(System.out::println);

    }
}
