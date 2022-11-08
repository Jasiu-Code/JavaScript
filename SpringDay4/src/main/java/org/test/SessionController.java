package org.test;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.SessionAttributes;

import javax.servlet.http.HttpSession;
import java.time.LocalDate;
import java.time.LocalTime;

@Controller
@SessionAttributes({"loginStart"})
public class SessionController {
    @RequestMapping("/")
    @ResponseBody
    public String session2(HttpSession ses, Model model) {
        String sesMax = (String) ses.getAttribute("loginStart");
        if (sesMax == null) {
            model.addAttribute("loginStart", LocalDate.now() + " "+LocalTime.now());
        }
        System.out.println(sesMax);
        return "home" + sesMax;
    }


//    public String home(Model model) {
//        String ses = (String)
//        model.addAttribute("loginStart");
//        return "home";
//    }
}
