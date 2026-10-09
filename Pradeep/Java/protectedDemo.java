 // access specifiers->Private Protect Public
class NewPhone{
    protected String password = "1234";
    void updatePassword(String newPass){
        if(newPass!=" "){
            password = newPass;
        }
    }
}
class Gpay extends NewPhone{
    String showPassword(){
        updatePassword("123456");
        return  password;
    }
}
public class protectedDemo {
    public static void main(String[] args) {
        Gpay pass = new Gpay();
        System.out.println(pass.showPassword());;

    }
}
