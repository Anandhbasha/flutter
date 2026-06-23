class Ramnagar{
    List<String> Courses = ["ReactNative","Flutter","UX/UI","JAVA","PYTHON","MERN","NODEJS","REACTJS","JS","PHP"];
    void show(){
        print("The RamNagar Courses are: $Courses");
    }
}
mixin Saravanampatti{
    List<String> Courses = ["ReactNative","Flutter","UX/UI","JAVA","PYTHON","MERN","NODEJS","REACTJS","JS","PHP"];
    void show(){
        print("The SaravanamPatti Courses are: $Courses");
    }
}

mixin Chennai{
    List<String> Courses = ["ReactNative","Flutter","UX/UI","JAVA","PYTHON","MERN","NODEJS","REACTJS","JS","PHP"];
    void show(){
        print("The Chennai Courses are: $Courses");
    }
}
class Qtree extends Ramnagar with Saravanampatti,Chennai{

}

void main(){
    Qtree Q = Qtree();
    Q.show();
}