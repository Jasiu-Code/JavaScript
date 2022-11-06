package HomeworkDay2;

import java.util.function.Function;

public class Main03 {
    public static void main(String[] args) {
        String sample = "CODERSLAB";
        Function<String,String> fn = x -> x.substring(2,x.length()-2).toLowerCase();
        String sampleText = fn.apply(sample);
        System.out.println(sampleText);
    }
}
