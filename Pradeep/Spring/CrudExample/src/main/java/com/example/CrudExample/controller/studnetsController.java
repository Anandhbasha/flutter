package com.example.CrudExample.controller;

import com.example.CrudExample.Service.StudentService;
import com.example.CrudExample.Student;
import org.springframework.web.bind.annotation.*;
import org.springframework.http.ResponseEntity;

import java.util.List;

@RestController
@RequestMapping
public class studnetsController{
    private final StudentService ser;
    public studnetsController(StudentService ser){
        this.ser = ser;
    }
    @PostMapping("/add")
    public ResponseEntity<Student> addStudent(@RequestBody Student stu){
        Student saved = ser.addStudent(stu);
        return ResponseEntity.status(201).body(saved);
    }
    @GetMapping("/all")
    public List<Student> getAllStudents(){
        return ser.getAllStudents();
    }
    @GetMapping("/getOne/{id}")
    public ResponseEntity<Student> getStudent(@PathVariable int id){
        return ser.getStudentById(id).map(ResponseEntity.ok).orElse(()->ResponseEntity.notFound.build());
    }
    @PutMapping("/updateStu/{id}")
    public ResponseEntity<Student> getStudent(@PathVariable int id,@RequestBody Student stu){
        return ser.updateStudent(id,stu).map(ResponseEntity.ok).orElse(()->ResponseEntity.notFound.build());
    }
    @DeleteMapping("/delStu/{id")
    public ResponseEntity<Void> deleteStudent(@PathVariable int id){
        boolean removed = ser.deleteStudent(id);
        if(removed){
            return ResponseEntity.noContent().build();
        }
        return  ResponseEntity.notFound().build();
    }
    @GetMapping("/searchByName")
    public List<Student> searchByName(@RequestParam String name){
        return ser.searchByName(name);
    }
    @GetMapping("/searchByCourse")
    public List<Student> searchByCourse(@RequestParam String course){
        return ser.searchByCourse(course);
    }
    @GetMapping("/count")
    public int countStudents(){
        return ser.countStudents();
    }
    public ResponseEntity<String> handleError(IllegalArgumentException e){
        return ResponseEntity.badRequest().body(e.getMessage());
    }
}
