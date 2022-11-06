package Day2.InterfejsyFunkcyjne;

import java.util.ArrayList;
import java.util.List;

public class Main02 {
    static <T, S> void printList(List<S> src, Filter<S> f, Transform<T, S> t) {
        for (S s : src) {
            if (f.check(s)) {
                System.out.println(t.transform(s));
            }
        }
    }

    public static void main(String[] args) {
        List<Integer> list = new ArrayList<>();
        list.add(1);
        list.add(2);
        list.add(3);
        list.add(30);
        IntegerFilter intFilter = new IntegerFilter();
        IntegerTransform intTrans = new IntegerTransform();
        //uzywajac klasy
        printList(list,intFilter,intTrans);
        //lambda
        printList(list,intFilter,s -> s-1);
        //klasa anonimowa
        Transform intTrans2= new Transform<Integer,Integer>(){
            @Override
            public Integer transform(Integer s) {
                return s-1;
            }
        };
        printList(list,intFilter,intTrans2);


    }
}
