
package com.example.CrudExample.controller;

import com.example.CrudExample.Service.StudentService;
import com.example.CrudExample.Student;

import org.springframework.web.bind.annotation.*;
import org.springframework.http.ResponseEntity;

import java.util.List;

@RestController
@RequestMapping("/students")
public class StudentsController {

    private final StudentService ser;

    public StudentsController(StudentService ser) {
        this.ser = ser;
    }

    // POST
    @PostMapping("/add")
    public ResponseEntity<Student> addStudent(@RequestBody Student stu) {
        Student saved = ser.addStudent(stu);
        return ResponseEntity.status(201).body(saved);
    }

    // GET ALL
    @GetMapping("/all")
    public List<Student> getAllStudents() {
        return ser.getAllStudents();
    }

    // GET BY ID
    @GetMapping("/getOne/{id}")
    public ResponseEntity<Student> getStudent(@PathVariable int id) {
        return ser.getStudentById(id)
                .map(ResponseEntity::ok)
                .orElseGet(() -> ResponseEntity.notFound().build());
    }

    // UPDATE
    @PutMapping("/updateStu/{id}")
    public ResponseEntity<Student> updateStudent(
            @PathVariable int id,
            @RequestBody Student stu) {

        return ser.updateStudent(id, stu)
                .map(ResponseEntity::ok)
                .orElseGet(() -> ResponseEntity.notFound().build());
    }

    // DELETE
    @DeleteMapping("/delStu/{id}")
    public ResponseEntity<Void> deleteStudent(@PathVariable int id) {

        boolean removed = ser.deleteStudent(id);

        if (removed) {
            return ResponseEntity.noContent().build();
        }

        return ResponseEntity.notFound().build();
    }

    // SEARCH BY NAME
    @GetMapping("/searchByName")
    public List<Student> searchByName(@RequestParam String name) {
        return ser.searchByName(name);
    }

    // SEARCH BY COURSE
    @GetMapping("/searchByCourse")
    public List<Student> searchByCourse(@RequestParam String course) {
        return ser.searchByCourse(course);
    }

    // COUNT
    @GetMapping("/count")
    public int countStudents() {
        return ser.countStudents();
    }

    // ERROR HANDLING
    @ExceptionHandler(IllegalArgumentException.class)
    public ResponseEntity<String> handleError(IllegalArgumentException e) {
        return ResponseEntity.badRequest().body(e.getMessage());
    }
}
