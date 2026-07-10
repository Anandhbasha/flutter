void main(){
    int age =18;
    double salary = 50000.25;
    num a =10;
    num b =10.5;
    String name = "Araveen";
    bool todayClass = true;
    // list
    List users = ["Anandh","Pradeep",90,80];
    // Set
    Set nums = {10,10,10,20,20,20,30,40,50};
    print(nums);
    // map
    Map person = {
        "name":"Kalai",
        "City":"CBE"
    };
    print(person["name"]);
    // dynamic
    dynamic value = 10;
    value =  "Flutter";
    print(value);
    var names = "Js";
    // names = 60;
    // same does't
    // varible should start with letter
    // varibale name new-value dont use space and - for declaration
    // var 
    // Object
    Object x= "Dart";
    print(x);
    //symbol
    Symbol s = #Dart;
    print(s);
    // runes
    Runes heart = Runes('\u2764');
    print(String.fromCharCodes(heart));
}