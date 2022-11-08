package org.test;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletRequest;
import java.time.LocalDate;

@Controller
@RequestMapping("/first")
public class getMaxParam {

    @RequestMapping("/random/{min}/{max}")
    @ResponseBody
    private String helloParam(@PathVariable int max, @PathVariable int min) {
        return "Uzytkownik podal wartosc max= " + max + " min= " + min + " Wylosowano liczbe: " + (int) ((Math.random() * (max - min)) + min);
    }

    @RequestMapping("/hello/{firstName}/{lastName}")
    @ResponseBody
    private String helloQuest(@PathVariable String firstName, @PathVariable String lastName) {
        return "Witaj " + firstName + " " + lastName;
    }

    @GetMapping("/form")
    private String getForm() {
        return "/form.jsp";
    }

    @PostMapping("/form")
    @ResponseBody
    private String getForm2(HttpServletRequest req) {
        String paramName = req.getParameter("paramName");
        LocalDate paramDate = LocalDate.parse(req.getParameter("paramDate"));
        return paramName + " " + paramDate;

    }

//Data ma być podawana i wyświetlana w formacie yyyy-MM-dd

}
