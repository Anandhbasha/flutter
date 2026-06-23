class Qtree{
    List<String> Courses = ["ReactNative","Flutter","UX/UI"];
}
class Trainer extends Qtree{
    String TrainerName = "ABC";
}
class Jishnu extends Trainer{

}
class Tharun extends Trainer{

}

void main(){
    Tharun T = Tharun();
    Jishnu J = Jishnu();
    print(J.TrainerName);
    print(J.Courses);
    print(T.TrainerName);
    print(T.Courses);
}