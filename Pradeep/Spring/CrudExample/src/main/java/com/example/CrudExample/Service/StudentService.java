package com.example.CrudExample.Service;

import com.example.CrudExample.Student;
import com.example.CrudExample.repository.StudentRepository;

import java.util.List;
import java.util.Optional;

@Service
public class StudentService {
    private final StudentRepository repo;
    StudentService(StudentRepository repo){
        this.repo=repo;
    }
    private  void validateStudent(Student stu){
        if(stu==null){
            throw  new IllegalArgumentException("Student Detail are Required");
        }
        if(stu.getId()<=0){
            throw new IllegalArgumentException("Id must be a Positive number");
        }
        if(stu.getName()==null || stu.getName().isBlank()){
            throw new IllegalArgumentException("name is required");
        }
        if(stu.getCourse()==null || stu.getCourse().isBlank()){
            throw new IllegalArgumentException("Course is required");
        }
    }
    public Student addStudent(Student stu){
        validateStudent(stu);
        if(repo.findById(stu.getId()).isPresent()){
            throw new IllegalArgumentException(("Student ID Already exist"));
        }
        return repo.save(stu);
    }
    public List<Student> getAllStudents(){
        return repo.findAll();
    }
    public Optional<Student> getStudentById(int id){
        return  repo.findById(id);
    }
    public  Optional<Student>updateStudent(int id,Student updateStudent){
        if(updateStudent==null){
            throw new IllegalArgumentException("Detail are required to update a student");
        }
        if(updateStudent.getName()==null || updateStudent.getName().isBlank()){
            throw  new IllegalArgumentException("Student name is required");
        }
        if(updateStudent.getCourse()==null || updateStudent.getCourse().isBlank()){
            throw  new IllegalArgumentException("Student course is required");
        }
        Optional<Student> existing = repo.findById(id);
        if (existing.isPresent()){
           Student student = existing.get();
           student.setName((updateStudent.getName()));
            student.setCourse((updateStudent.getCourse()));
            return Optional.of(repo.update(student));
        }
        return  Optional.empty();
    }
//    Delete
    public boolean deleteStudent(int id) {
        return repo.deleteById(id);
    }
//    Search
    public List<Student>searchByName(String name){
        return repo.findByName(name);
    }
    public List<Student>sefindByCourse(String course){
        return repo.findByCourse(course);
    }
    public int countStudents(){
        return repo.countStudents();
    }
}
