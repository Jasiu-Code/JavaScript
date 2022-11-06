package Day2.WyrazeniaLambda;
import java.util.function.Predicate;

public class Main02 {

    public static void main(String[] args) {
        Predicate<Object> pred = x ->{
            if(x instanceof String){
                System.out.println(x);
                return true;
            }
            return false;
        };
        pred.test("Dupa");
    }
}
