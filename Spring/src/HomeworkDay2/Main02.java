package HomeworkDay2;

import java.util.Arrays;
import java.util.List;
import java.util.function.Predicate;
import java.util.stream.Collectors;

public class Main02 {
    public static List<String> filterList(List<String> listString, Predicate<String> ref){
        return  listString.stream()
                .filter(ref)
                .collect(Collectors.toList());

    };
    public static void main(String[] args) {
        List<String> list = Arrays.asList("tree", "bird", "park", "snow", "computer", "i jeszcze jakiś inny napis, który na końcu ma a");

        System.out.println(filterList(list,x->x.length()>4));
        System.out.println(filterList(list,x->x.contains("b")));
        System.out.println(filterList(list,x->x.endsWith("a")));

    }
}
