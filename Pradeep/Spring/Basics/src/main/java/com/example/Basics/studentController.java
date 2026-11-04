package com.example.Basics;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import java.util.*;

@RestController
@RequestMapping("/students")

public class studentController {
    ArrayList<student> students =  new ArrayList<>();
    @PostMapping("/add")
    public String addStudent(@RequestBody student stud){
        students.add(stud);
        return  "Student Added Sucessfully" + stud;
    }
    @GetMapping("/all")
    public ArrayList<student>getStudents(){
        return  students;
    }
    @GetMapping("getOne/{id}")
    public  Object getStudents(@PathVariable int id){
        for(student s :students){
            if(s.getId()==id){
                return  s;
            }
        }
        return "Student Not found";
    }
    @PutMapping("/updateStu/{id}")
    public  String updateStudent(@PathVariable int id,@RequestBody student updatedStudent){
        for(student s :students){
            if(s.getId()==id){
                s.setName(updatedStudent.getName());
                s.setCourse(updatedStudent.getCourse());
                return "Student updated sucessfully";
            }
        }
        return "Student Not found";
    }
    @DeleteMapping("/deleteStu/{id}")
    public String deleteStudent(@PathVariable int id){
        boolean removed = students.removeIf(s->s.getId()==id);
        return  removed?"Student Deleted sucessfully":"Student not found";
    }
    @GetMapping("/details/{id}")
    public ResponseEntity<?> getStudent(@PathVariable int id){
        for(student s:students){
            if (s.getId()==id){
                return ResponseEntity.ok(s);
//                status ->200
            }
        }
        return  ResponseEntity.status(400).body("Student not found");
    }
    @GetMapping("/optional/{id}")
    public ResponseEntity<?> findById(@PathVariable int id){
        Optional <student> res = students.stream().filter(s->s.getId()==id).findFirst();
        if(res.isPresent()){
            return ResponseEntity.ok(res.get());
        }
        return ResponseEntity.status(404).body("Student nof found");
    }
}

