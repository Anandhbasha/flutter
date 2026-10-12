class BankAccount{
    private double balance = 500;

    void deposit(double amount){
        if(amount>0){
            balance+=amount;
        }else{
            System.out.println("Please the valid amount");
        }
    }
    void withdraw(double amount){
        if(amount<=balance && amount>0){
            balance-=amount;
        }
        else{
            System.out.println("Insufficient Balance");
        }
    }
    double showBalance(){
        return balance;
    }
}
public class encapsDemo{
    public static void main(String[] args) {
        BankAccount acc1  = new BankAccount();
        acc1.deposit(5000);
        System.out.println(acc1.showBalance());
        acc1.withdraw(500);
        System.out.println(acc1.showBalance());
    }
}