class Topic{
    String topicName = "OOPS";
    String language = "Dart";
    String StudentName = "Jihsnu";

    void show(){
        print("The are learning the oop Concepts");
    }
}

class AddStudent extends Topic{
    String StudentName = "tharun";
}
void main(){
    AddStudent S1 = AddStudent();
    print(S1.topicName);
    print(S1.StudentName);
    print(S1.language);
    S1.show();
}