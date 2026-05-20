package com.project.esg.choice.controller;

import com.project.esg.choice.service.ChoiceService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@CrossOrigin(value = "*")
@RestController
@RequestMapping(value = "/")
public class ChoiceController {
    @Autowired
    private ChoiceService choiceService;

    @GetMapping(value = "/")
    public ResponseEntity<?> test (){
        System.out.println("백엔드 접속확인");
        return ResponseEntity.ok("김경호화이팅");
    }
    @GetMapping(value = "/test")
    public ResponseEntity<?> test1(){
        String result = choiceService.select();
        System.out.println(result);
        return ResponseEntity.ok(result);
    }
}
