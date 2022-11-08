package org.example;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;

import java.io.File;
import java.io.FileNotFoundException;
import java.util.ArrayList;
import java.util.List;
import java.util.Scanner;

@Controller
public class HelloController {

    @RequestMapping("/workers")
    public String workersAction(Model model) {
        List<Worker> workers = new ArrayList<>();
        String worker = " Empty";
        try {
            File file = new File("/Users/imac/Desktop/JavaScript/JavaScript/Spring_Homework_Day4/Workers.txt");
            Scanner scan = new Scanner(file);
            while (scan.hasNext()) {
                String[] work = scan.nextLine().split(",");
                Worker w = new Worker(Integer.parseInt(work[0]), work[1]);
                workers.add(w);
            }

        } catch (FileNotFoundException e) {
            e.printStackTrace();
        }
        int rand = (int)(Math.random()*30);
        System.out.println(rand);
        for(Worker w:workers){
            if(w.getId() == rand){
                worker = w.getName();
            }
        }

        model.addAttribute("worker", worker);
        return "/workers.jsp";

    }
}
