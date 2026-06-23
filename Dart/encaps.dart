// Encapsulation
class BankAccount{
    double _balance = 1000;
    void deposit(amount){
        if(amount>0){
            _balance+=amount;
        }
    }
    void withdraw(amount){
         if(amount<_balance){
            _balance-=amount;
         }else{
            print("Insufficient Balance");
         }
    }
    
    double showbalance(){
        return _balance;
    }
} 

void main(){
    BankAccount acc = BankAccount();
    acc.deposit(10000);
    print(acc.showbalance());
    acc.withdraw(10500);
    acc._balance = 45000;
    print(acc._balance);
}