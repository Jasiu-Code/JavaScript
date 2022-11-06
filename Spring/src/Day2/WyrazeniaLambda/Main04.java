package Day2.WyrazeniaLambda;

public class Main04 {
    public static void main(String[] args) {
        Calcuate<Double> kwadrat = x -> x * x;
        System.out.println(kwadrat.calc(3.0));
        Calcuate<Double> pierw = x -> Math.sqrt(x);
        System.out.println(pierw.calc(9.0));
        Calcuate<Integer> silnia = x -> {
            int res=1;
            while (x > 0) {
                res = res*x;
                x--;
            }
            return res;
        };
        System.out.println(silnia.calc(4));
    }


}
