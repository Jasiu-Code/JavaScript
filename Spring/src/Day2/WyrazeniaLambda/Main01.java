package Day2.WyrazeniaLambda;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;
import java.util.Scanner;

public class Main01 {
    public static void main(String[] args) {
        Scanner scan = new Scanner(System.in);
        System.out.println("Podaj słowa:");
        String words = scan.nextLine();
        List<String> list = Arrays.asList(words.split(" "));
        System.out.println(words);
        System.out.println("\u001B[31m"+"z Listy:"+"\u001B[0m");
        for(String s : list){
            System.out.println(s);
        }
        System.out.println("\u001B[31m"+"z Listy po sortowaniu:"+"\u001B[0m");
        list.sort((s1, s2) -> s1.compareToIgnoreCase(s2));
        for(String s : list){
            System.out.println(s);
        }

    }
}
