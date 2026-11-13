
package com.example.CrudExample.repository;

import com.example.CrudExample.Student;
import org.springframework.stereotype.Repository;

import java.util.*;

@Repository
public class StudentRepository {

    private final List<Student> students = new ArrayList<>();

    // POST - Save
    public Student save(Student student) {
        students.add(student);
        return student;
    }

    // GET - Find All
    public List<Student> findAll() {
        return new ArrayList<>(students);
    }

    // GET - Find By ID
    public Optional<Student> findById(int id) {
        return students.stream()
                .filter(s -> s.getId() == id)
                .findFirst();
    }

    // UPDATE
    public Student update(Student student) {
        Optional<Student> existing = findById(student.getId());

        if (existing.isPresent()) {
            Student oldStudent = existing.get();
            oldStudent.setName(student.getName());
            oldStudent.setCourse(student.getCourse());
            return oldStudent;
        }

        return null;
    }

    // DELETE
    public boolean deleteById(int id) {
        return students.removeIf(s -> s.getId() == id);
    }

    // Search by Course
    public List<Student> findByCourse(String course) {
        return students.stream()
                .filter(s -> s.getCourse().equalsIgnoreCase(course))
                .toList();
    }

    // Search by Name
    public List<Student> findByName(String name) {
        return students.stream()
                .filter(s -> s.getName().toLowerCase()
                        .contains(name.toLowerCase()))
                .toList();
    }

    // Count
    public int countStudents() {
        return students.size();
    }
}
