import 'dart:async';

Future <String> greet()async{
    print("Hello Welcome");
    await Future.delayed(Duration(seconds:3));
    return "Finally Complted";
}
void main() async{
    String name =  await greet();
    print(name);
}