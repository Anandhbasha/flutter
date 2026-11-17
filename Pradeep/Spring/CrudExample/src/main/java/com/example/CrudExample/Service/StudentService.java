package com.example.CrudExample.Service;

import com.example.CrudExample.Student;
import com.example.CrudExample.repository.StudentRepository;

import java.util.List;
import java.util.Optional;
import org.springframework.stereotype.Service;

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
            return Optional.of(repo.save(student));
        }
        return  Optional.empty();
    }
//    Delete
    public boolean deleteStudent(int id) {
        if(!repo.existsById(id));
        return  false;
    }
//    Search
// Search by Name
    public List<Student> searchByName(String name) {
        return repo.findByNameIgnoreCase(name);
    }

    // Search by Course
    public List<Student> searchByCourse(String course) {
        return repo.findByCourseIgnoreCase(course);
    }

    // Count Students
    public long countStudents() {
        return repo.count();
    }
}
