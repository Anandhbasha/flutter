package com.example.CrudExample.repository;

import com.example.CrudExample.Student;

import java.util.*;
import java.util.List;
import java.util.Optional;

public class StudentRepository {
    private final List<Student> students = new ArrayList<>();

//    POST
    public Student save(Student student){
        students.add(student);
        return student;
    }
//    Read
    public  List<Student>findAll(){
        return new ArrayList<Student>();
    }
    public Optional<Student> findById(int id){
        return  students.stream().filter(s->s.getId()).findFirst();
    }
//    update
    public Student update(Student student){
        return  student;
    }
//    del
    public  boolean deleteById(int id){
        return students.removeIf(s->s.getId()==id);
    }
//    Search by course
    public List<Student>findByCourse(final String course){
        return  students.stream().filter(s->s.getCourse().equalsIgnoreCase(course)).toList();
    }
    public List<Student>findByName(final String name){
        return  students.stream().filter(s->s.getName().toLowerCase().contains(name.toLowerCase())).toList();
    }
//    count
    public int countStudents(){
        return  students.size();
    }
}

