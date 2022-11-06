package Day2.InterfejsyFunkcyjne;

import java.util.ArrayList;
import java.util.List;

public class Main03 {
    static <T, S> List<T> create(List<S> src, Filter<S> f, Transform<T, S> t){
        List<T> newList = new ArrayList<>();
        for(S s : src){
            if(f.check(s)){
                newList.add(t.transform(s));
            }
        }
        return newList;
    }

    public static void main(String[] args) {
         List<Integer> data = new ArrayList<>();
         data.add(2);
         data.add(5);
         data.add(25);
         List<Integer> res = create(data,v-> v<20, s -> s-1);
         for(Integer i : res){
             System.out.println(i);
         }

    }

}
