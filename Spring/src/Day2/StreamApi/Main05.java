package Day2.StreamApi;

import java.util.Arrays;
import java.util.List;
import java.util.Map;
import java.util.Set;
import java.util.stream.Collectors;

public class Main05 {
    public static void main(String[] args) {
        List<String> stringList = Arrays.asList("pies", "kot", "wielblad", "ptak");
        Map<String, String> mapStr = stringList.stream()
                .collect(Collectors.toMap(s -> s,s-> new StringBuilder(s).reverse().toString()));

        Set<String> st = mapStr.keySet();
        for (String s : st){
            System.out.println(s);
            System.out.println(mapStr.get(s));
        }
    }
}
