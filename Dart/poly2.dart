class Payment{
    void pay(){
        print("Payment Done");
    }
}
class Gpay extends Payment{
    @override
    void pay(){
        print("Payment done by Gpay");
    }
}
class PhonePe extends Payment{
    @override
    void pay(){
        print("Payment done by PhonePe");
    }
}

void main(){
    PhonePe p =PhonePe();
    p.pay();
}