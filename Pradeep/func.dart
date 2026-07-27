// // without peramter
// add(){
//     int a = 10;
//     int b = 20;
//     int total = a+b;
//     print(total);
// }
// // add function
// void main(){
//     add();
//     add();
//     add();
//     add();
//     add();
//     add();
//     add();
// }


// with perameter
// String name ->perameter
// greet(String name){
//     print("Welcome $name");
// }
// void main(){
//     greet("Arun");
//     greet("Pradeep");
//     greet("Anandh");
// }


// void total(int a,int b,int c ){
//     int res = a+b+c;
//     print(res);
// }

// void main(){
//     total(10, 20, 30);
//     total(30, 60, 80);
//     total(77, 65, 81);
// }



// int total(int a,int b,int c ){
//     int res = a+b+c;
//     return res ;
// }

// void main(){
//     print(total(10, 20, 30));
//     print(total(30, 60, 80));
//     print(total(77, 65, 81));
// }



double avg(int total){
    double average = total/3;
    return average;
}

int total(int a,int b,int c ){
    int res = a+b+c;
    return res ;
}

void main(){
    int std1 = total(10, 20, 30);
    int std2 = total(30, 60, 80);
    int std3 =total(77, 65, 81);
    print("Student1 Avg is:${avg(std1)}");
    print("Student2 Avg is:${avg(std2)}");
    print("Student3 Avg is:${avg(std3)}");

}