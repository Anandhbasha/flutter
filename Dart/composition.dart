class Hospital{
    void show(){
        print("This is Hospital");
    }
}

class Doctor{
    Hospital h = Hospital();
    void Doc(){
        h.show();
        print("This is Doctors Cabin");
    }
}
class Patient{
    Doctor D = Doctor();
    void pat(){
        D.Doc();
    }
}

void main(){
    Patient p = Patient();
    p.pat();
}