import java.util.LinkedList;

public class arrayListDemo {
    public static void main(String[] args) {
        LinkedList<String> students = new LinkedList<>();
        students.add("aravind");
        students.add("kalai");
        students.add("kala");
        students.add("Kavin");
        students.add("Karthick");
        System.out.println(students);
        students.addFirst("Zara");
        students.addLast("Praveen");
        students.add(2,"vijay");
        for(String stu:students){
            System.out.println(stu);
        }
        // System.out.println(students);
        // System.out.println(students.size());
        // System.out.println(students.contains("Praveen"));
        // students.clear();
        // System.out.println(students+"All");
        // linkedlist->aravind->0->0|1
        // linkedlist->kalai->1
    }
}



// Create a LinkedList of 5 student names. Display all names using a for-each loop.

// Create a LinkedList of 5 integers. Insert 100 at the beginning and 500 at the end.

// Create a LinkedList of employee names. Remove the first and last employee.

// Create a LinkedList of products. Search for a product using contains() and display whether it is available.

// Create a music playlist using LinkedList. Add songs, remove a song, display the first and last songs, and print the total number of songs.


// generic

// ## Part 1: Generic Class `<T>`

// ### Task 1: Student Marks Management

// Create a generic class `Student<T>`.

// Requirements:

// 1. Store student name as `String`.
// 2. Store marks using generic type `T`.
// 3. Initialize values using a constructor.
// 4. Create a `displayDetails()` method.
// 5. Create three student objects with marks as `Integer`, `Double`, and `String`.

// ### Task 2: Product Storage System

// Create a generic class `Product<T>`.

// Requirements:

// 1. Store product name and price.
// 2. Price should use generic type `T`.
// 3. Initialize values using a constructor.
// 4. Create objects with `Integer` and `Double` prices.
// 5. Display all product details.

// ## Part 2: Generic Methods `<T>`

// ### Task 3: Universal Data Printer

// Create a class `DataPrinter`.

// Requirements:

// 1. Create a generic method `printData(T value)`.
// 2. The method should accept different datatypes.
// 3. Call the method using `Integer`, `String`, `Double`, and `Boolean`.
// 4. Display the datatype and value.

// ### Task 4: Generic Array Display

// Create a generic method `displayArray(T[] array)`.

// Requirements:

// 1. Accept an array of any reference datatype.
// 2. Display all elements using a loop.
// 3. Test with an `Integer[]` array.
// 4. Test with a `String[]` array.
// 5. Test with a `Double[]` array.

// ## Part 3: Multiple Generic Parameters `<T, U>`

// ### Task 5: Employee Salary Management

// Create a generic class `Employee<T, U>`.

// Requirements:

// 1. Store employee name as `String`.
// 2. Store employee ID using `T`.
// 3. Store salary using `U`.
// 4. Initialize values using a constructor.
// 5. Create objects using:
//    - `Employee<Integer, Double>`
//    - `Employee<String, Integer>`
// 6. Display employee details.

// ### Task 6: Student Result System

// Create a generic class `Result<T, U>`.

// Requirements:

// 1. Store student name.
// 2. Store marks using `T`.
// 3. Store grade using `U`.
// 4. Create objects with different datatype combinations.
// 5. Display the student result.

// ## Part 4: Bounded Generics `<T extends Number>`

// ### Task 7: Generic Calculator

// Create a generic class `Calculator<T extends Number>`.

// Requirements:

// 1. Accept two numbers using a constructor.
// 2. Create methods for:
//    - Addition
//    - Subtraction
//    - Multiplication
//    - Division
// 3. Test using `Integer` and `Double`.
// 4. Prevent `String` values from being accepted.
// 5. Handle division by zero.

// ### Task 8: Student Average Calculator

// Create a generic class `MarksCalculator<T extends Number>`.

// Requirements:

// 1. Store three subject marks.
// 2. Calculate total marks.
// 3. Calculate average marks.
// 4. Accept `Integer`, `Float`, and `Double` values.
// 5. Display total and average.

// ## Part 5: Generic Interface

// ### Task 9: Generic Storage System

// Create a generic interface `Storage<T>`.

// Requirements:

// 1. Declare `save(T data)`.
// 2. Declare `getData()`.
// 3. Declare `update(T data)`.
// 4. Implement the interface in a class `DataStorage<T>`.
// 5. Create separate objects for `String` and `Integer`.
// 6. Perform save, retrieve, and update operations.

// ### Task 10: Generic Repository System

// Create a generic interface `Repository<T>`.

// Requirements:

// 1. Declare the following methods:
//    - `add(T item)`
//    - `remove(T item)`
//    - `display()`
// 2. Implement the interface using a generic class `RepositoryImpl<T>`.
// 3. Use an `ArrayList<T>` internally.
// 4. Create one repository for student names.
// 5. Create another repository for product IDs.
// 6. Perform add, remove, and display operations.

