package com.weronnip.newmus.controller;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class MainController {

    @GetMapping("/")
    public String home(Model model) {
        model.addAttribute("title", "Home");
        return "index";
    }

    @GetMapping("/Contact")
    public String contact(Model model) {
        model.addAttribute("title", "Contact");
        return "contact";
    }

    @GetMapping("/Recommendations")
    public String recom(Model model) {
        model.addAttribute("title", "Recommendations");
        return "recom";
    }

    @GetMapping("/Login")
    public String login(Model model) {
        model.addAttribute("title", "Login");
        return "login";
    }
}
