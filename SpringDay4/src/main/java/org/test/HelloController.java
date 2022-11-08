package org.test;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

import java.time.LocalDate;
import java.time.LocalTime;

@Controller
public class HelloController {

    @GetMapping("/helloView")
    private String helloView(Model model){
        String bg = "white";
        String font = "black";
        LocalTime time = LocalTime.now();
        if(time.isAfter(LocalTime.parse("08:00:00")) && time.isBefore(LocalTime.parse("20:00:00"))) {
            bg="black";
            font="white";
        }
        model.addAttribute("bg", bg);
        model.addAttribute("font", font);
        return "/home";
    }
}
