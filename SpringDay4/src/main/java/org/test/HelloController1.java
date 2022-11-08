package org.test;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

@Controller
public class HelloController1 {

    @RequestMapping("/hello8")
    @ResponseBody
    public String helloWorld() {
        return "Hello World";
    }
}
