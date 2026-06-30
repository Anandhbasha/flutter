abstract class BankLoan{
    void loan();
}
class HDFC extends BankLoan{
    @override
    void loan(){
        print("Rate of Intrest is 7%");
    }
}
class SBI extends BankLoan{
    @override
    void loan(){
        print("Rate of Intrest is 6.5%");
    }
}

void main(){
    SBI S =SBI();
    S.loan();
}