class Qtree{
    String CourseName = "ReactNative";
    String CourseName1 = "Flutter";
}
class Trainer extends Qtree{

}
class Student1 extends Qtree{

}
class Student2 extends Qtree{

}

void main(){
    Trainer T = Trainer();
    Student1 s1 = Student1();
    Student2 s2 = Student2();
    print(T.CourseName);
    print(T.CourseName1);
    print(s1.CourseName);
    print(s1.CourseName1);
    print(s2.CourseName1);
    print(s2.CourseName1);
}
