void main(){
    try{
        int a = 10;
        int b = 0;
        double c = a/b; 
        print(c);
    }catch(e){
        print("Error: ${e}");
    }
    print("Program continues after exception handling");
}