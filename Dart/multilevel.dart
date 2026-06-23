class Qtree{
    String StaffName = "Anandh";
}
class Anandh extends Qtree{
    String Language = "Flutter";
}

class Jishnu extends Anandh{
    String Timing = "9AM";
}

class Tharun extends Anandh{
     String Timing = "9AM";
}
void main(){
    Jishnu j = Jishnu();
    Tharun T = Tharun();
    print(j.Language);
    print(T.Language);
}