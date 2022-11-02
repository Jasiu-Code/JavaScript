import java.util.ArrayList;
import java.util.List;

public class Main {
    public static void main(String[] args) {
//        Vehicle[] arr = {new Car(100,"S","suv"),new Train(125,"x",600)};
//        for(int i =0 ;i<arr.length; i++){
//            System.out.println(arr[i].toString());
//        }
        List<Shape> list = new ArrayList<>();
        Rectangle rec = new Rectangle(2, 5);
        Square sq = new Square(3);
        Circle cic = new Circle(5);
        list.add(rec);
        list.add(sq);
        list.add(cic);
        for (Shape i : list) {
            System.out.println(i.toString());
        }

    }
}