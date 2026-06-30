class person{
    String _name = "";
    String get name => _name;
    set name(String n){
        _name = n;
    }
}

void main(){
    person p = person();
    p.name = "Bala";
    print(p.name);
}