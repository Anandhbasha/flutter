package com.example.Basics;

import org.springframework.web.bind.annotation.*;

import java.util.Map;

@RestController
@RequestMapping ("/Basic")
public class WelcomeController {

    @GetMapping("/home")
    public String home() {
        return "Welcome to My First Spring Boot Application!";
    }

    @GetMapping("/welcome/{id}/{stuName}")
    public String welcome(@RequestParam  String courseName,@PathVariable int id,@PathVariable String stuName) {
        return "Welcome to SpringBoot" + " "+id + " "+stuName + " He is Studying" + " "+courseName;
    }
    @PostMapping("/add")
    public String addStudent(@RequestBody Map<String,String> data){
        String userName = data.get("userName");
        String Password = data.get("Password");
        return "Login Sucessfully " + userName;
    }
    @PutMapping("update/{id}")
    public String updateStudent(@PathVariable int id,@RequestBody Map<String,String> data){
        String studentName = data.get("studentName");
        String studentCourse = data.get("studentCourse");
        return  "StudentId:" + id + " studentName:" + studentName + "studentCourse:" + studentCourse;
    }

    @DeleteMapping("del/{id}")
    public String updateStudent(@PathVariable int id){
        return  "StudentId:" + id + " Student is deleted sucessfully";
    }
}