package org.test;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

@Controller
public class RandomController {

    @RequestMapping("/show-random")
    @ResponseBody
    public String showRandom() {
        return "Wylosowano liczbe: " + (int) (Math.random()*101);
    }
}
