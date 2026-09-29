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
        return  password;
    }
}
public class protectedDemo {
    public static void main(String[] args) {
        Gpay pass = new Gpay();
        pass.updatePassword("123456");
        System.out.println(pass.showPassword());;

    }
}
