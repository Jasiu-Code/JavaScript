package HomeworkDay2;

import java.io.File;
import java.io.FileNotFoundException;
import java.util.ArrayList;
import java.util.Comparator;
import java.util.List;
import java.util.Scanner;
import java.util.stream.Collectors;

public class Main06 {
    public static void main(String[] args) throws FileNotFoundException {
        List<Employee> employees = new ArrayList<>();
        File file = new File("/Users/imac/Desktop/JavaScript/JavaScript/Spring/src/HomeworkDay2/earnings.txt");
        Scanner scan = new Scanner(file);
        while (scan.hasNext()){
            String[] data = scan.nextLine().split(",|;");
            if(data.length == 4 && data[2].length() > 4){
                Employee newEmploye = new Employee();
                newEmploye.setName(data[0]);
                newEmploye.setSurname(data[1]);
                newEmploye.setSalary(Double.parseDouble(data[2].substring(0,data[2].length()-2)));
                newEmploye.setContract(data[3]);
                employees.add(newEmploye);
            }
        }
        employees.stream()
                .filter(x -> !x.getName().contains("Kowalsk") & !x.getSurname().contains("Kowalsk"))
                .sorted()
                .forEach(System.out::println);


//        List<String> contentPreFiltered = content.stream()
//                .filter(x -> x.contains("zł"))
//                .filter(x-> !x.contains("Kowalski") && !x.contains("Kowalska"))
//                .sorted((a,b)->Double.parseDouble(a)>Double.parseDouble(b))
//                .limit(3)
//                .collect(Collectors.toList());
//
//        List<String[]> spared = new ArrayList<>();
//        for(String s : contentPreFiltered){
//            spared.add(s.split(" "));
//        }
//        for(String[] s : spared){
//            System.out.println(s[2]);
//        }
    }
}
