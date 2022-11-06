package Day1;

public class Main {
    public static void main(String[] args) {
//        Day1.Vehicle[] arr = {new Day1.Car(100,"S","suv"),new Day1.Train(125,"x",600)};
//        for(int i =0 ;i<arr.length; i++){
//            System.out.println(arr[i].toString());
//        }
//        List<Day1.Shape> list = new ArrayList<>();
//        Day1.Rectangle rec = new Day1.Rectangle(2, 5);
//        Day1.Square sq = new Day1.Square(3);
//        Day1.Circle cic = new Day1.Circle(5);
//        list.add(rec);
//        list.add(sq);
//        list.add(cic);
//        for (Day1.Shape i : list) {
//            System.out.println(i.toString());
//        }
//        Day1.StandartUrl u = new Day1.StandartUrl();
//        System.out.println(u.getParam("param1", "url_example?param1=99"));
//        Day1.ExtendedUrl eu = new Day1.ExtendedUrl();
//        System.out.println(eu.getParam("param1", "url_example/param1.55/param2.byte"));
//            Day1.Moveable[] movTab = new Day1.Moveable[2];
//            movTab[0] = new Day1.Person();
//            movTab[1] = new Day1.Cat();
//            for(Day1.Moveable i : movTab){
//                i.start();
//            }
        Post post = new Post();
        post.setTitle("Some title");
        post.setContent("Some content");

        post.attach(new FacebookObserver());
        post.attach(new TwitterObserver());
        post.share();
    }
}