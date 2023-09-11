package com.weronnip.newmus.controller;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class MainController {

    @GetMapping("/")
    public String home(Model model) {
        model.addAttribute("title", "World Music");
        return "index";
    }

    @GetMapping("/contact")
    public String contact(Model model) {
        model.addAttribute("title", "World Music");
        return "contact";
    }

    @GetMapping("/recommendations")
    public String recom(Model model) {
        model.addAttribute("title", "World Music");
        return "recom";
    }

    @GetMapping("/login")
    public String login(Model model) {
        model.addAttribute("title", "World Music");
        return "login";
    }
}
