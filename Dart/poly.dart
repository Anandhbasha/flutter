class Maths{
    add(int a,int b,[int c =0]){
        print(a+b+c);
    }
}
void main(){
    Maths m = Maths();
    m.add(10,20);
    m.add(10,20,30);
}
// method overloading
// Compile time polymorphism