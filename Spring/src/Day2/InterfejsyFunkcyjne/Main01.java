package Day2.InterfejsyFunkcyjne;

import java.util.ArrayList;
import java.util.List;

public class Main01 {

    static <T> void printList(List<T> src, Filter<T> f) {
        for (T s : src) {
            if (f.check(s)) {
                System.out.println(s);
            }
        }
    }

    public static void main(String[] args) {
        List<Integer> iList = new ArrayList<>();
        Integer a = 1;
        Integer b = 21;
        iList.add(a);
        iList.add(b);
        IntegerFilter integerFilter = new IntegerFilter();
        printList(iList, integerFilter);
        Filter<Integer> integerFilter1 = new Filter<Integer>() {
            @Override
            public boolean check(Integer v) {
                return v < 30;
            }
        };
        printList(iList, integerFilter1);
        printList(iList, v -> v < 30);

    }
}
