package org.test;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import java.time.DayOfWeek;
import java.time.LocalDate;
import java.time.LocalTime;

@Controller
public class FreeTimeController {
    DayOfWeek day = LocalDate.now().getDayOfWeek();
    LocalTime time = LocalTime.now();

    @RequestMapping("/show-freeTime")
    @ResponseBody
    public String showFreeTime(){
        if(day.getValue() == 6 || day.getValue() == 7){
            return "Wolne";
        } else if (time.isAfter(LocalTime.parse("07:00:00.00")) && time.isBefore(LocalTime.parse("17:00:00.00"))) {
            return "Pracuje nie dzwon";
        } else {
           return  "Po pracy";
        }
    }

}
