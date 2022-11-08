package org.test;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;

@Controller
public class MultiplyController {

//    @GetMapping("/multiply/{size}")
//    private String multiply(Model model,@PathVariable int size){
//        model.addAttribute(size);
//        return "/multi";
//    }
@GetMapping("/multiply/{rows}/{cols}")
private String multiply(Model model,@PathVariable int rows, @PathVariable int cols){
    model.addAttribute(rows);
    model.addAttribute(cols);
    return "/multi";
}
}
