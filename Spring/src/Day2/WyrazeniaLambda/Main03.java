package Day2.WyrazeniaLambda;

import java.util.function.Predicate;

public class Main03 {
    public static void main(String[] args) {
        Predicate<Object> pred = x ->{
            if(x instanceof Number){
                System.out.println(x);
                return true;
            }
            return false;
        };
        pred.test(123);
    }
}
